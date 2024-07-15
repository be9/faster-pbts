import { Logger } from 'winston';
import stream from 'node:stream';

import {
  CallbackTypeComment,
  ClassConstructorComment,
  EnumComment,
  FuncParam,
  FunctionComment,
  InterfaceComment,
  MemberComment,
  NamespaceComment,
  ParsedComment,
} from './parse';
import { convertType } from './types';

/** Process incoming parsed comments and spit typings for them. */
export async function generateTypings(
  logger: Logger,
  input: Iterable<ParsedComment> | AsyncIterable<ParsedComment>,
  out: stream.Writable,
  indent: number,
) {
  const w = new Writer(out, indent);
  const namespaceStack = new Array<NamespaceComment>();
  const classStack = new Array<string>();

  const fullNamespace = () => [...namespaceStack.map((ns) => ns.name), ...classStack].join('.');
  const fullNamespaceLength = () => namespaceStack.length + classStack.length;

  let currentClass: ClassConstructorComment | null = null;
  let currentClassCallbacks = new Array<CallbackTypeComment>();

  for await (const pc of input) {
    if (pc == null) {
      continue;
    }

    switch (pc.type) {
      case 'namespace':
        handleNamespace(pc);
        break;

      case 'enum':
        handleEnum(pc);
        break;

      case 'interface':
        handleInterface(pc);
        break;

      case 'constructor':
        handleConstructor(pc);
        break;

      case 'function':
        handleFunction(pc);
        break;

      case 'member':
        handleMember(pc);
        break;

      case 'callback_type':
        currentClassCallbacks.push(pc);
        break;
    }
  }

  // close all active name spaces
  closeClassIfOpen(true);

  for (let i = 0; i < namespaceStack.length; i++) {
    w.end();
  }

  //----------------------------------------------------------------------------

  function handleNamespace(nc: NamespaceComment) {
    const ns = nc.memberOf ?? '';

    const lastClassName = closeClassIfOpen(false);
    ensureProperNamespaceLevel(lastClassName, ns);

    w.startNamespace(nc.name, nc.exports != null);
    namespaceStack.push(nc);

    logger.debug(`namespace ${dotJoin(ns, nc.name)}`);
  }

  //----------------------------------------------------------------------------

  function handleEnum(ec: EnumComment) {
    // Namespaced enum: name: "namespace.Name"
    // Root-level exported enum: exports: "Name"
    //
    // If it's not the current namespace, we need to end some.
    let enumName: string;
    let ns = '';

    if (ec.exports != null) {
      enumName = ec.exports;
      ns = '';
    } else if (ec.name != null) {
      const nameParts = ec.name.split('.');
      enumName = nameParts[nameParts.length - 1];
      ns = nameParts.slice(0, -1).join('.');
    } else {
      throw Error('enum without a name');
    }

    const lastClassName = closeClassIfOpen(false);
    ensureProperNamespaceLevel(lastClassName, ns);

    w.enum(enumName, ec.items, ec.exports != null);
    logger.debug(`enum ${dotJoin(ns, enumName)}`);
  }

  //----------------------------------------------------------------------------

  function handleConstructor(cc: ClassConstructorComment) {
    const lastClassName = closeClassIfOpen(false);
    ensureProperNamespaceLevel(lastClassName, cc.memberOf ?? '');

    currentClass = cc;
    w.startClass(cc);
    logger.debug(
      `${cc.extends === '$protobuf.rpc.Service' ? 'service' : 'message'} class ${dotJoin(fullNamespace(), cc.className)}`,
    );
  }

  //----------------------------------------------------------------------------

  function handleFunction(fc: FunctionComment) {
    if (currentClass == null) {
      logger.error(JSON.stringify(fc));
      throw Error('logic error: a function outside of class scope');
    }

    const expectedNs =
      fullNamespaceLength() === 0 ? currentClass.className : fullNamespace() + `.${currentClass.className}`;

    if (fc.memberOf !== expectedNs) {
      logger.error(JSON.stringify(fc));
      throw Error('logic error: unexpected memberof in a function');
    }

    w.func(fc);
  }

  //----------------------------------------------------------------------------

  function handleMember(mc: MemberComment) {
    if (currentClass == null) {
      logger.error(JSON.stringify(mc));
      throw Error('logic error: a member outside of class scope');
    }

    if (mc.memberOf !== fullNamespace() + `.${currentClass.className}`) {
      logger.error(JSON.stringify(mc));
      throw Error('logic error: unexpected memberof in a member');
    }

    w.member(mc);
  }

  //----------------------------------------------------------------------------

  function handleInterface(ic: InterfaceComment) {
    const lastClassName = closeClassIfOpen(false);
    const memberOf = ic.memberOf ?? '';

    ensureProperNamespaceLevel(lastClassName, memberOf);

    logger.debug(`message iface ${dotJoin(fullNamespace(), ic.name)}`);
    w.interface(ic);
  }

  //----------------------------------------------------------------------------

  function closeClassIfOpen(closeWholeStack: boolean): string | null {
    if (currentClass != null) {
      w.end();

      if (currentClassCallbacks.length > 0) {
        w.namespaceWithCallbacks(currentClass.className, currentClassCallbacks);
      }

      if (closeWholeStack) {
        while (classStack.length > 0) {
          classStack.pop();
          w.end();
        }
      }

      const { className } = currentClass;

      currentClass = null;
      currentClassCallbacks = [];

      return className;
    }
    return null;
  }

  //----------------------------------------------------------------------------

  function ensureProperNamespaceLevel(lastClassName: string | null, expectedNamespace: string) {
    if (expectedNamespace !== fullNamespace()) {
      const curNamespace = fullNamespace();
      const nsParts = expectedNamespace === '' ? [] : expectedNamespace.split('.');

      // a new nested message on a higher level
      if (nsParts.length < fullNamespaceLength()) {
        const diff = fullNamespaceLength() - nsParts.length;
        for (let lvl = 0; lvl < diff; lvl++) {
          if (classStack.length > 0) {
            classStack.pop();
          } else {
            namespaceStack.pop();
          }
          w.end();
        }

        if (expectedNamespace !== fullNamespace()) {
          logger.error(`ns expected=${expectedNamespace} was=${curNamespace} now=${fullNamespace()}`);
          throw Error('logic error: nested messages WTF, could not pop correctly');
        }
      } else {
        // Check for an inner class
        if (lastClassName != null && expectedNamespace === fullNamespace() + `.${lastClassName}`) {
          classStack.push(lastClassName);
          w.startNamespace(lastClassName, false);
        } else {
          throw Error('logic error: unexpected memberof');
        }
      }
    }
  }
}

function dotJoin(prefix: string, last: string) {
  return prefix === '' ? last : `${prefix}.${last}`;
}

/** Helper class to generate the typings file. */
class Writer {
  private indentLevel = 0;

  constructor(
    private out: stream.Writable,
    private spaces = 2,
  ) {}

  startNamespace(name: string, exported: boolean) {
    this._newline();
    this._write(`${exported ? 'export ' : ''}namespace ${name} {`);
    this.indentLevel++;
  }

  startClass(c: ClassConstructorComment) {
    let decl = `${c.exports ? 'export ' : ''}class ${c.className}`;
    if (c.extends != null) {
      decl += ` extends ${c.extends}`;
    }
    if (c.implements != null) {
      decl += ` implements ${c.implements}`;
    }
    this._newline();
    this._write(decl + ' {');
    this.indentLevel++;

    this._write(`constructor(${this._paramList(c.params)});`);
  }

  end() {
    --this.indentLevel;
    this._write('}');
  }

  enum(name: string, items: EnumComment['items'], exported: boolean) {
    this._newline();
    this._write(`${exported ? 'export ' : ''}enum ${name} {`);
    this.indentLevel++;

    for (let i = 0; i < items.length; i++) {
      const [name, value] = items[i];
      const comma = i < items.length - 1 ? ',' : '';

      this._write(`${name} = ${value}${comma}`);
    }

    --this.indentLevel;
    this._write(`}`);
  }

  func(fc: FunctionComment) {
    this._write(
      `public ${fc.static ? 'static ' : ''}${fc.name}(${this._paramList(fc.params)}): ${safeReturnType(fc.returnType)};`,
    );
  }

  member(mc: MemberComment) {
    let t = mc.memberType;
    let opt = '';

    if (t.endsWith('|undefined')) {
      opt = '?';
      t = t.slice(0, -10);
    }

    this._write(`public ${mc.name}${opt}: ${convertType(t)};`);
  }

  interface(ic: InterfaceComment) {
    this._newline();
    this._write(`${ic.exports ? 'export ' : ''}interface ${ic.name} {`);
    this.indentLevel++;

    for (const fp of ic.properties) {
      const fpFixed =
        fp.optional && !fp.type.endsWith('|null')
          ? {
              ...fp,
              type: `${fp.type}|null`,
            }
          : fp;

      this._write(this._funcParam(fpFixed) + ';');
    }

    --this.indentLevel;
    this._write(`}`);
  }

  namespaceWithCallbacks(name: string, callbacks: Array<CallbackTypeComment>) {
    this._newline();
    this._write(`namespace ${name} {`);
    this.indentLevel++;

    for (const cc of callbacks) {
      this._newline();
      this._write(
        `type ${cc.typeName} = (${this._paramList(cc.params)}) => ${safeReturnType(cc.returnType ?? 'void')};`,
      );
    }

    --this.indentLevel;
    this._write(`}`);
  }

  _write(s: string) {
    this.out.write(''.padStart(this.spaces * this.indentLevel) + s + '\n');
  }

  _newline() {
    this.out.write('\n');
  }

  _paramList(params: Array<FuncParam>): string {
    return params.map((fp) => this._funcParam(fp)).join(', ');
  }

  _funcParam(fp: FuncParam): string {
    return `${fp.name}${fp.optional ? '?' : ''}: ${convertType(fp.type)}`;
  }
}

function safeReturnType(t: string): string {
  return t === 'undefined' ? 'void' : convertType(t);
}
