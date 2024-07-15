import Parser from 'tree-sitter';
import Javascript from 'tree-sitter-javascript';
import JSDoc from 'tree-sitter-jsdoc';
import { Logger } from 'winston';

/**
 * ParsedComment represents the JSDoc extracted from .js source
 * that has an impact on typings.
 */
export type ParsedComment =
  | EnumComment
  | NamespaceComment
  | ClassConstructorComment
  | FunctionComment
  | CallbackTypeComment
  | InterfaceComment
  | MemberComment
  | null; // unknown comment

export interface EnumComment {
  type: 'enum';
  name?: string;
  exports?: string;
  items: Array<[string, number]>;
}

export interface NamespaceComment {
  type: 'namespace';
  name: string;
  exports?: string;
  memberOf?: string;
}

export interface FuncParam {
  name: string;
  type: string;
  optional: boolean;
}

export interface ClassConstructorComment {
  type: 'constructor';
  className: string;
  extends?: string;
  implements?: string;
  memberOf?: string;
  exports?: string;
  params: Array<FuncParam>;
}

export interface FunctionComment {
  type: 'function';
  name: string;
  static: boolean;
  params: Array<FuncParam>;
  returnType: string;
  memberOf: string;
}

export interface CallbackTypeComment {
  type: 'callback_type';
  typeName: string;
  memberOf: string;
  params: Array<FuncParam>;
  returnType?: string;
}

export interface InterfaceComment {
  type: 'interface';
  name: string;
  memberOf?: string;
  exports?: string;
  properties: Array<FuncParam>;
}

export interface MemberComment {
  type: 'member';
  memberOf: string;
  name: string;
  memberType: string;
}

/** Parser class. */
export class ProtoJsParser {
  private jsParser = new Parser();
  private commentParser = new Parser();

  constructor(private logger: Logger) {
    this.jsParser.setLanguage(Javascript);
    this.commentParser.setLanguage(JSDoc);
  }

  private commentQuery = new Parser.Query(Javascript, '(comment) @cmt');

  /**
   * A generator function that consumes a source chunk and yields a sequence
   * of ParsedComment.
   *
   * @param sourceChunk an independent chunk (see chunks.ts)
   */
  *parseChunk(sourceChunk: string): Generator<ParsedComment, void> {
    const tree = this.jsParser.parse(sourceChunk, undefined, {
      // this setting is somehow required for parser not to fail
      bufferSize: sourceChunk.length + 1,
    });
    const matches = this.commentQuery.matches(tree.rootNode);

    for (const m of matches) {
      for (const c of m.captures) {
        if (c.name === 'cmt') {
          const { text } = c.node;
          if (text.startsWith('/**')) {
            // we're only interested in JSDoc comments
            const res = this.parseJSDocComment(text, c.node.nextSibling);
            if (res === false) {
              continue;
            }
            if (res != null) {
              yield res;
            } else {
              this.logger.debug('unexpected comment: ' + text);
            }
          }
        }
      }
    }
  }

  /**
   * Parse a JSDoc comment.
   *
   * @param commentSource comment source
   * @param siblingNode the nextSibling node for the comment (i.e., a node that
   *   immediately follows the comment)
   *
   * @returns false if the comment should be ignored, null if comment cannot be parsed, and a parsed comment otherwise.
   */
  parseJSDocComment(commentSource: string, siblingNode: Parser.SyntaxNode | null): ParsedComment | false {
    const lines = commentSource.split('\n').map((s) => s.trim());

    if (lines.find((l) => l.startsWith('* @namespace'))) {
      if (this._isEmptyNamespace(siblingNode)) {
        this.logger.debug('empty namespace: ' + commentSource);
        return false;
      }

      return this._parseNamespace(lines);
    }

    if (lines.find((l) => l.startsWith('* @enum'))) {
      return this._parseEnum(lines);
    }

    if (lines.find((l) => l.startsWith('* @constructor'))) {
      if (siblingNode == null) {
        throw Error('constructor comment without a function');
      }
      return this._parseConstructor(siblingNode, lines);
    }

    let m = findFirstMatch(lines, /\* @function (\S+)/);
    if (m != null) {
      return this._parseFunction(m[1], lines);
    }

    m = findFirstMatch(lines, /\* @typedef (\S+)/);
    if (m != null) {
      return this._parseCallbackType(m[1], lines);
    }

    m = findFirstMatch(lines, /\* @interface (\S+)/);
    if (m != null) {
      return this._parseInterface(m[1], lines);
    }

    m = findFirstMatch(lines, /\* @member {([^}]+)} (\w+)/);
    if (m != null) {
      return this._parseMember(m[1], m[2], lines);
    }

    return null;
  }

  _parseEnum(lines: Array<string>): EnumComment {
    const exports = getOptionalExports(lines);
    const items = new Array<[string, number]>();

    let name = '';

    for (const line of lines) {
      const l = line.trim();
      let m = l.match(/\s*\* @property {number} (\w+)=(\d+)/);

      if (m != null) {
        items.push([m[1], parseInt(m[2])]);
      }

      m = l.match(/\s*\* @name (\S+)/);
      if (m != null) {
        name = m[1];
      }
    }

    return {
      type: 'enum',
      ...(name.length > 0 ? { name } : null),
      ...(exports != null ? { exports } : null),
      items,
    };
  }

  _parseNamespace(lines: Array<string>): NamespaceComment {
    const descM = findFirstMatch(lines, /\* Namespace (\w+)\./);
    if (descM == null) {
      this.logger.error(lines.join('\n'));
      throw Error('cannot parse namespace name');
    }
    const memberOf = getOptionalMemberOf(lines);
    const exports = getOptionalExports(lines);

    return {
      type: 'namespace',
      name: descM[1],
      ...(exports != null ? { exports } : null),
      ...(memberOf != null ? { memberOf } : null),
    };
  }

  _parseConstructor(funcDecl: Parser.SyntaxNode, lines: Array<string>): ClassConstructorComment {
    const name = funcDecl.childForFieldName('name')?.text;
    if (name == null) {
      throw Error('function declaration without a name');
    }

    const memberOf = getOptionalMemberOf(lines);
    const exports = getOptionalExports(lines);

    const result: ClassConstructorComment = {
      type: 'constructor',
      className: name,
      params: collectParamLike(lines),
      ...(memberOf != null ? { memberOf } : null),
      ...(exports != null ? { exports } : null),
    };

    let m = findFirstMatch(lines, /\* @extends (\S+)/);
    if (m != null) {
      result.extends = m[1];
    }
    m = findFirstMatch(lines, /\* @implements (\S+)/);
    if (m != null) {
      result.implements = m[1];
    }

    return result;
  }

  _parseFunction(name: string, lines: Array<string>): FunctionComment {
    const returnTypeM = findFirstMatch(lines, /\* @returns {([^}]+)}/);
    if (returnTypeM == null) {
      throw Error('a function without @returns is not supported');
    }

    return {
      type: 'function',
      name,
      static: findFirstMatch(lines, /\* @static/) != null,
      memberOf: this._getMemberOf(lines),
      returnType: returnTypeM[1],
      params: collectParamLike(lines),
    };
  }

  _parseCallbackType(typeName: string, lines: Array<string>): CallbackTypeComment {
    const returnType = findFirstMatch(lines, /\* @returns {([^}]+)}/)?.[1];

    return {
      type: 'callback_type',
      typeName,
      memberOf: this._getMemberOf(lines),
      params: collectParamLike(lines),
      ...(returnType != null ? { returnType } : null),
    };
  }

  _parseInterface(name: string, lines: Array<string>): InterfaceComment {
    const memberOf = getOptionalMemberOf(lines);
    const exports = getOptionalExports(lines);

    return {
      type: 'interface',
      name,
      ...(memberOf != null ? { memberOf } : null),
      ...(exports != null ? { exports } : null),
      properties: collectParamLike(lines),
    };
  }

  _parseMember(type: string, name: string, lines: Array<string>): MemberComment {
    return {
      type: 'member',
      name,
      memberOf: this._getMemberOf(lines),
      memberType: type,
    };
  }

  _getMemberOf(lines: Array<string>): string {
    const mof = getOptionalMemberOf(lines);

    if (mof == null) {
      this.logger.error(lines.join('\n'));
      throw Error('constructs without @memberof are not supported');
    }

    return mof;
  }

  private emptyNamespaceQuery = new Parser.Query(
    Javascript,
    '(variable_declaration (variable_declarator value: (object))) @decl',
  );

  _isEmptyNamespace(node: Parser.SyntaxNode | null): boolean {
    if (node == null) {
      return false;
    }

    const cap = this.emptyNamespaceQuery.captures(node);

    // if the declaration is immediately followed by return, it's an empty namespace
    return cap.length === 1 && cap[0].node.nextSibling?.type === 'return_statement';
  }
}

function collectParamLike(lines: Array<string>): Array<FuncParam> {
  return lines.reduce((acc: Array<FuncParam>, l: string) => {
    const m = l.match(/\* @(?:param|property) {([^}]+)} (?:(\w+)|\[([.\w"]+))/);
    if (m != null) {
      acc.push(
        m[2] != null
          ? {
              name: m[2],
              type: m[1],
              optional: false,
            }
          : {
              name: m[3],
              type: m[1],
              optional: true,
            },
      );
    }
    return acc;
  }, []);
}

function findFirstMatch(lines: Array<string>, re: RegExp): RegExpMatchArray | undefined {
  for (const l of lines) {
    const m = l.match(re);
    if (m != null) {
      return m;
    }
  }
  return undefined;
}

function getOptionalMemberOf(lines: Array<string>): string | undefined {
  return findFirstMatch(lines, /\* @memberof (\S+)/)?.[1];
}

function getOptionalExports(lines: Array<string>): string | undefined {
  return findFirstMatch(lines, /\* @exports (\S+)/)?.[1];
}
