import { describe, it } from 'node:test';
import assert from 'node:assert';
import { convertType } from './types';

void describe('generate', () => {
  void describe(convertType.name, () => {
    const TEST_CASES: Array<[string, string, string]> = [
      ['simple type', 'string', 'string'],
      ['promise', 'Promise<bar.baz.boo.GetResponse>', 'Promise<bar.baz.boo.GetResponse>'],
      ['with =', 'bar.baz.boo.IGetRequest=', 'bar.baz.boo.IGetRequest'],

      ['ORed type', 'google.protobuf.IUInt64Value|null', '(google.protobuf.IUInt64Value|null)'],
      ['complex array', 'Array.<number|Long>|null', '((number|Long)[]|null)'],
      ['simple record', 'Object.<string,string>', '{ [k: string]: string }'],
      ['star', 'Object.<string,*>', '{ [k: string]: any }'],
    ];

    // The shortcut==false case is not used, but is tested to verify that
    // the grammar is able to parse simple types.

    [false, true].forEach((shortcut) => {
      void describe(`shortcut=${shortcut}`, () => {
        TEST_CASES.forEach(([desc, input, expected]) => {
          void it(desc, () => {
            assert.equal(convertType(input, shortcut), expected);
          });
        });
      });
    });
  });
});
