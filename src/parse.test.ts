import { ParsedComment, ProtoJsParser } from './parse';
import { describe, it } from 'node:test';
import assert from 'node:assert';
import Parser from 'tree-sitter';
import Javascript from 'tree-sitter-javascript';

import { testLogger } from './test-helpers';

void describe(ProtoJsParser.name, () => {
  void describe('handleJSDocComment', () => {
    const testCases: Array<{
      desc: string;
      input: string;
      expected: ParsedComment | false;
      sibling?: {
        code: string;
        query: Parser.Query;
      };
    }> = [
      {
        desc: 'namespace',
        input: `/**
     * Namespace example.
     * @exports example
     * @namespace
     */`,
        expected: {
          type: 'namespace',
          exports: 'example',
          name: 'example',
        },
      },

      {
        desc: 'empty namespace',
        input: `    /**
     * Namespace recurring_transactions_manager.
     * @exports recurring_transactions_manager
     * @namespace
     */`,
        sibling: {
          code: `
            $root.recurring_transactions_manager = (function() {

                /**
                 * Namespace recurring_transactions_manager.
                 * @exports recurring_transactions_manager
                 * @namespace
                 */
                var recurring_transactions_manager = {};

                return recurring_transactions_manager;
            })();
          `,
          query: new Parser.Query(Javascript, `(variable_declaration (variable_declarator value: (object))) @sibling`),
        },
        expected: false,
      },

      {
        desc: 'enum',
        input: `/**
     * Status enum.
     * @name example.Status
     * @enum {string}
     * @property {number} STATUS_UNKNOWN=0 STATUS_UNKNOWN value
     * @property {number} STATUS_STARTED=1 STATUS_STARTED value
     * @property {number} STATUS_FINISHED=2 STATUS_FINISHED value
     */`,
        expected: {
          type: 'enum',
          name: 'example.Status',
          items: [
            ['STATUS_UNKNOWN', 0],
            ['STATUS_STARTED', 1],
            ['STATUS_FINISHED', 2],
          ],
        },
      },

      {
        desc: 'service class constructor',
        input: `/**
         * Constructs a new Example service.
         * @memberof example
         * @classdesc Represents an Example
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */`,
        sibling: {
          code: `
            function Example(rpcImpl, requestDelimited, responseDelimited) {
              $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
          `,
          query: new Parser.Query(Javascript, `(function_declaration) @sibling`),
        },
        expected: {
          type: 'constructor',
          extends: '$protobuf.rpc.Service',
          className: 'Example',
          memberOf: 'example',
          params: [
            { name: 'rpcImpl', type: '$protobuf.RPCImpl', optional: false },
            { name: 'requestDelimited', type: 'boolean', optional: true },
            { name: 'responseDelimited', type: 'boolean', optional: true },
          ],
        },
      },

      {
        desc: 'service .create function',
        input: `/**
         * Creates new Example service using the specified rpc implementation.
         * @function create
         * @memberof example.Example
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Example} RPC service. Useful where requests and/or responses are streamed.
         */`,
        expected: {
          type: 'function',
          name: 'create',
          static: true,
          memberOf: 'example.Example',
          params: [
            { name: 'rpcImpl', type: '$protobuf.RPCImpl', optional: false },
            { name: 'requestDelimited', type: 'boolean', optional: true },
            { name: 'responseDelimited', type: 'boolean', optional: true },
          ],
          returnType: 'Example',
        },
      },

      {
        desc: 'callback type',
        input: `/**
         * Callback as used by {@link example.Example#helloWorld}.
         * @memberof example.Example
         * @typedef HelloWorldCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {example.HelloWorldResponse} [response] HelloWorldResponse
         */`,
        expected: {
          type: 'callback_type',
          memberOf: 'example.Example',
          typeName: 'HelloWorldCallback',
          params: [
            { name: 'error', type: 'Error|null', optional: false },
            {
              name: 'response',
              type: 'example.HelloWorldResponse',
              optional: true,
            },
          ],
        },
      },

      {
        desc: 'RPC method 1',
        input: `/**
         * Calls HelloWorld.
         * @function helloWorld
         * @memberof example.Example
         * @instance
         * @param {example.IHelloWorldRequest} request HelloWorldRequest message or plain object
         * @param {example.Example.HelloWorldCallback} callback Node-style callback called with the error, if any, and HelloWorldResponse
         * @returns {undefined}
         * @variation 1
         */`,
        expected: {
          type: 'function',
          name: 'helloWorld',
          memberOf: 'example.Example',
          returnType: 'undefined',
          static: false,
          params: [
            {
              name: 'request',
              type: 'example.IHelloWorldRequest',
              optional: false,
            },
            {
              name: 'callback',
              type: 'example.Example.HelloWorldCallback',
              optional: false,
            },
          ],
        },
      },

      {
        desc: 'RPC method 2',
        input: `/**
         * Calls HelloWorld.
         * @function helloWorld
         * @memberof example.Example
         * @instance
         * @param {example.IHelloWorldRequest} request HelloWorldRequest message or plain object
         * @returns {Promise<example.HelloWorldResponse>} Promise
         * @variation 2
         */`,
        expected: {
          type: 'function',
          name: 'helloWorld',
          memberOf: 'example.Example',
          returnType: 'Promise<example.HelloWorldResponse>',
          static: false,
          params: [
            {
              name: 'request',
              type: 'example.IHelloWorldRequest',
              optional: false,
            },
          ],
        },
      },

      {
        desc: 'empty interface',
        input: `/**
         * Properties of a GetDeadlettersRequest.
         * @memberof example
         * @interface IGetDeadlettersRequest
         */`,
        expected: {
          type: 'interface',
          memberOf: 'example',
          name: 'IGetDeadlettersRequest',
          properties: [],
        },
      },

      {
        desc: 'empty message constructor',
        input: `/**
         * Constructs a new GetDeadlettersRequest.
         * @memberof example
         * @classdesc Represents a GetDeadlettersRequest.
         * @implements IGetDeadlettersRequest
         * @constructor
         * @param {example.IGetDeadlettersRequest=} [properties] Properties to set
         */`,
        sibling: {
          code: `
            function GetDeadlettersRequest(properties) {
              if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }`,
          query: new Parser.Query(Javascript, `(function_declaration) @sibling`),
        },
        expected: {
          type: 'constructor',
          className: 'GetDeadlettersRequest',
          implements: 'IGetDeadlettersRequest',
          memberOf: 'example',
          params: [
            {
              type: 'example.IGetDeadlettersRequest=',
              name: 'properties',
              optional: true,
            },
          ],
        },
      },

      {
        desc: '.create',
        input: `/**
         * Creates a new GetDeadlettersRequest instance using the specified properties.
         * @function create
         * @memberof example.GetDeadlettersRequest
         * @static
         * @param {example.IGetDeadlettersRequest=} [properties] Properties to set
         * @returns {example.GetDeadlettersRequest} GetDeadlettersRequest instance
         */`,
        expected: {
          type: 'function',
          name: 'create',
          memberOf: 'example.GetDeadlettersRequest',
          returnType: 'example.GetDeadlettersRequest',
          static: true,
          params: [
            {
              type: 'example.IGetDeadlettersRequest=',
              name: 'properties',
              optional: true,
            },
          ],
        },
      },

      {
        desc: 'encode',
        input: `/**
         * Encodes the specified GetDeadlettersRequest message. Does not implicitly {@link example.GetDeadlettersRequest.verify|verify} messages.
         * @function encode
         * @memberof example.GetDeadlettersRequest
         * @static
         * @param {example.IGetDeadlettersRequest} message GetDeadlettersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */`,
        expected: {
          type: 'function',
          name: 'encode',
          memberOf: 'example.GetDeadlettersRequest',
          returnType: '$protobuf.Writer',
          static: true,
          params: [
            {
              type: 'example.IGetDeadlettersRequest',
              name: 'message',
              optional: false,
            },
            {
              type: '$protobuf.Writer',
              name: 'writer',
              optional: true,
            },
          ],
        },
      },

      {
        desc: 'decode',
        input: `/**
         * Decodes a GetDeadlettersRequest message from the specified reader or buffer.
         * @function decode
         * @memberof example.GetDeadlettersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.GetDeadlettersRequest} GetDeadlettersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */`,
        expected: {
          type: 'function',
          name: 'decode',
          memberOf: 'example.GetDeadlettersRequest',
          returnType: 'example.GetDeadlettersRequest',
          static: true,
          params: [
            {
              type: '$protobuf.Reader|Uint8Array',
              name: 'reader',
              optional: false,
            },
            {
              type: 'number',
              name: 'length',
              optional: true,
            },
          ],
        },
      },

      {
        desc: 'verify',
        input: `/**
         * Verifies a GetDeadlettersRequest message.
         * @function verify
         * @memberof example.GetDeadlettersRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} \`null\` if valid, otherwise the reason why it is not
         */`,
        expected: {
          type: 'function',
          name: 'verify',
          memberOf: 'example.GetDeadlettersRequest',
          returnType: 'string|null',
          static: true,
          params: [
            {
              type: 'Object.<string,*>',
              name: 'message',
              optional: false,
            },
          ],
        },
      },

      {
        desc: 'fromObject',
        input: `/**
         * Creates a GetDeadlettersRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof example.GetDeadlettersRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.GetDeadlettersRequest} GetDeadlettersRequest
         */`,
        expected: {
          type: 'function',
          name: 'fromObject',
          memberOf: 'example.GetDeadlettersRequest',
          returnType: 'example.GetDeadlettersRequest',
          static: true,
          params: [
            {
              type: 'Object.<string,*>',
              name: 'object',
              optional: false,
            },
          ],
        },
      },

      {
        desc: 'toObject',
        input: `/**
         * Creates a plain object from a GetDeadlettersRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof example.GetDeadlettersRequest
         * @static
         * @param {example.GetDeadlettersRequest} message GetDeadlettersRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */`,
        expected: {
          type: 'function',
          name: 'toObject',
          memberOf: 'example.GetDeadlettersRequest',
          returnType: 'Object.<string,*>',
          static: true,
          params: [
            {
              type: 'example.GetDeadlettersRequest',
              name: 'message',
              optional: false,
            },
            {
              type: '$protobuf.IConversionOptions',
              name: 'options',
              optional: true,
            },
          ],
        },
      },

      {
        desc: 'toJSON',
        input: `/**
         * Converts this GetDeadlettersRequest to JSON.
         * @function toJSON
         * @memberof example.GetDeadlettersRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */`,
        expected: {
          type: 'function',
          name: 'toJSON',
          memberOf: 'example.GetDeadlettersRequest',
          returnType: 'Object.<string,*>',
          static: false,
          params: [],
        },
      },

      {
        desc: 'non-empty message properties',
        input: `/**
         * Properties of a GetFooByIDResponse.
         * @memberof example
         * @interface IGetFooByIDResponse
         * @property {example.IFoo|null} [result] GetFooByIDResponse result
         */`,
        expected: {
          type: 'interface',
          memberOf: 'example',
          name: 'IGetFooByIDResponse',
          properties: [{ name: 'result', type: 'example.IFoo|null', optional: true }],
        },
      },

      {
        desc: 'properties with special names',
        input: `/**
         * Properties of a GetFooByIDResponse.
         * @memberof example
         * @interface IGetFooByIDResponse
         * @property {example.IFoo|null} ["class"] GetFooByIDResponse result
         */`,
        expected: {
          type: 'interface',
          memberOf: 'example',
          name: 'IGetFooByIDResponse',
          properties: [{ name: '"class"', type: 'example.IFoo|null', optional: true }],
        },
      },

      {
        desc: 'message field',
        input: `/**
         * GetFooByIDResponse result.
         * @member {example.IFoo|null|undefined} result
         * @memberof example.GetFooByIDResponse
         * @instance
         */`,
        expected: {
          type: 'member',
          name: 'result',
          memberOf: 'example.GetFooByIDResponse',
          memberType: 'example.IFoo|null|undefined',
        },
      },
    ];

    testCases.forEach(({ desc, input, expected, sibling }) => {
      void (expected == null ? it.skip : it)(desc, () => {
        const parser = new ProtoJsParser(testLogger());

        const siblingNode = () => {
          if (sibling == null) {
            return null;
          }
          const jsParser = new Parser();
          jsParser.setLanguage(Javascript);
          const root = jsParser.parse(sibling.code).rootNode;

          const cap = sibling.query.captures(root);

          assert.equal(cap.length, 1);
          return cap[0].node;
        };

        const result = parser.parseJSDocComment(input, siblingNode());
        assert.deepStrictEqual(result, expected);
      });
    });
  });
});
