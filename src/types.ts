import typeParserGrammar from './type-parser/grammar.ohm-bundle';
import { Node as OhmNode, NonterminalNode } from 'ohm-js';

const semantics = typeParserGrammar.createSemantics();

type TSTypeable = { tstype(): string };
type N = OhmNode & TSTypeable;

semantics.addOperation<string>('tstype()', {
  Type(unionedTypes): string {
    const args = unionedTypes.asIteration().children.map((c) => (c as N).tstype());

    return args.length === 1 ? args[0] : `(${args.join('|')})`;
  },

  Simple(this: NonterminalNode, _): string {
    return stripTrailingEquals(this.sourceString);
  },

  ArrayType(_1, t, _2): string {
    return (t as N).tstype() + '[]';
  },

  PromiseType(_1, t, _2): string {
    return `Promise<${(t as N).tstype()}>`;
  },

  ObjectType(_1, t1, _2, t2, _3): string {
    return `{ [k: ${(t1 as N).tstype()}]: ${(t2 as N).tstype()} }`;
  },

  AnyType(_) {
    return 'any';
  },
});

function stripTrailingEquals(s: string): string {
  return s.endsWith('=') ? s.slice(0, -1) : s;
}

/**
 * Converts JSDoc type to the TypeScript type.
 *
 * The function parses the type using the Ohm grammar (see src/type-parser).
 *
 * @param input The original JSDoc type.
 * @param shortcut If true, a simple heuristic is used to skip parsing and
 *   return the source value as is. This is faster.
 * @returns the converted type.
 */
export function convertType(input: string, shortcut = true): string {
  if (shortcut && !input.match(/[<>*|]/)) {
    // In case there are no special characters, we may assume that the type
    // is Simple.
    return stripTrailingEquals(input);
  }

  const m = typeParserGrammar.match(input);
  if (!m.succeeded()) {
    throw Error(`unrecognized type: ${input}. ${m.shortMessage}`);
  }

  return (semantics(m) as TSTypeable).tstype();
}
