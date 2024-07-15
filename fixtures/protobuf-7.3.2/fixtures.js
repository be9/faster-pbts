/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.fixtureroot || ($protobuf.roots.fixtureroot = {});

$root.bar = (function() {

    /**
     * Namespace bar.
     * @exports bar
     * @namespace
     */
    var bar = {};

    bar.baz = (function() {

        /**
         * Namespace baz.
         * @memberof bar
         * @namespace
         */
        var baz = {};

        baz.boo = (function() {

            /**
             * Namespace boo.
             * @memberof bar.baz
             * @namespace
             */
            var boo = {};

            boo.Boo = (function() {

                /**
                 * Constructs a new Boo service.
                 * @memberof bar.baz.boo
                 * @classdesc Represents a Boo
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function Boo(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (Boo.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Boo;

                /**
                 * Creates new Boo service using the specified rpc implementation.
                 * @function create
                 * @memberof bar.baz.boo.Boo
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {Boo} RPC service. Useful where requests and/or responses are streamed.
                 */
                Boo.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link bar.baz.boo.Boo#get}.
                 * @memberof bar.baz.boo.Boo
                 * @typedef GetCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {bar.baz.boo.GetResponse} [response] GetResponse
                 */

                /**
                 * Calls Get.
                 * @function get
                 * @memberof bar.baz.boo.Boo
                 * @instance
                 * @param {bar.baz.boo.IGetRequest} request GetRequest message or plain object
                 * @param {bar.baz.boo.Boo.GetCallback} callback Node-style callback called with the error, if any, and GetResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Boo.prototype.get = function get(request, callback) {
                    return this.rpcCall(get, $root.bar.baz.boo.GetRequest, $root.bar.baz.boo.GetResponse, request, callback);
                }, "name", { value: "Get" });

                /**
                 * Calls Get.
                 * @function get
                 * @memberof bar.baz.boo.Boo
                 * @instance
                 * @param {bar.baz.boo.IGetRequest} request GetRequest message or plain object
                 * @returns {Promise<bar.baz.boo.GetResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link bar.baz.boo.Boo#set}.
                 * @memberof bar.baz.boo.Boo
                 * @typedef SetCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {bar.baz.boo.SetResponse} [response] SetResponse
                 */

                /**
                 * Calls Set.
                 * @function set
                 * @memberof bar.baz.boo.Boo
                 * @instance
                 * @param {bar.baz.boo.ISetRequest} request SetRequest message or plain object
                 * @param {bar.baz.boo.Boo.SetCallback} callback Node-style callback called with the error, if any, and SetResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Boo.prototype.set = function set(request, callback) {
                    return this.rpcCall(set, $root.bar.baz.boo.SetRequest, $root.bar.baz.boo.SetResponse, request, callback);
                }, "name", { value: "Set" });

                /**
                 * Calls Set.
                 * @function set
                 * @memberof bar.baz.boo.Boo
                 * @instance
                 * @param {bar.baz.boo.ISetRequest} request SetRequest message or plain object
                 * @returns {Promise<bar.baz.boo.SetResponse>} Promise
                 * @variation 2
                 */

                return Boo;
            })();

            boo.GetRequest = (function() {

                /**
                 * Properties of a GetRequest.
                 * @memberof bar.baz.boo
                 * @interface IGetRequest
                 */

                /**
                 * Constructs a new GetRequest.
                 * @memberof bar.baz.boo
                 * @classdesc Represents a GetRequest.
                 * @implements IGetRequest
                 * @constructor
                 * @param {bar.baz.boo.IGetRequest=} [properties] Properties to set
                 */
                function GetRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new GetRequest instance using the specified properties.
                 * @function create
                 * @memberof bar.baz.boo.GetRequest
                 * @static
                 * @param {bar.baz.boo.IGetRequest=} [properties] Properties to set
                 * @returns {bar.baz.boo.GetRequest} GetRequest instance
                 */
                GetRequest.create = function create(properties) {
                    return new GetRequest(properties);
                };

                /**
                 * Encodes the specified GetRequest message. Does not implicitly {@link bar.baz.boo.GetRequest.verify|verify} messages.
                 * @function encode
                 * @memberof bar.baz.boo.GetRequest
                 * @static
                 * @param {bar.baz.boo.IGetRequest} message GetRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified GetRequest message, length delimited. Does not implicitly {@link bar.baz.boo.GetRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof bar.baz.boo.GetRequest
                 * @static
                 * @param {bar.baz.boo.IGetRequest} message GetRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof bar.baz.boo.GetRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {bar.baz.boo.GetRequest} GetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bar.baz.boo.GetRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof bar.baz.boo.GetRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {bar.baz.boo.GetRequest} GetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetRequest message.
                 * @function verify
                 * @memberof bar.baz.boo.GetRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a GetRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof bar.baz.boo.GetRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {bar.baz.boo.GetRequest} GetRequest
                 */
                GetRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.bar.baz.boo.GetRequest)
                        return object;
                    return new $root.bar.baz.boo.GetRequest();
                };

                /**
                 * Creates a plain object from a GetRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof bar.baz.boo.GetRequest
                 * @static
                 * @param {bar.baz.boo.GetRequest} message GetRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this GetRequest to JSON.
                 * @function toJSON
                 * @memberof bar.baz.boo.GetRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetRequest
                 * @function getTypeUrl
                 * @memberof bar.baz.boo.GetRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/bar.baz.boo.GetRequest";
                };

                return GetRequest;
            })();

            boo.GetResponse = (function() {

                /**
                 * Properties of a GetResponse.
                 * @memberof bar.baz.boo
                 * @interface IGetResponse
                 */

                /**
                 * Constructs a new GetResponse.
                 * @memberof bar.baz.boo
                 * @classdesc Represents a GetResponse.
                 * @implements IGetResponse
                 * @constructor
                 * @param {bar.baz.boo.IGetResponse=} [properties] Properties to set
                 */
                function GetResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new GetResponse instance using the specified properties.
                 * @function create
                 * @memberof bar.baz.boo.GetResponse
                 * @static
                 * @param {bar.baz.boo.IGetResponse=} [properties] Properties to set
                 * @returns {bar.baz.boo.GetResponse} GetResponse instance
                 */
                GetResponse.create = function create(properties) {
                    return new GetResponse(properties);
                };

                /**
                 * Encodes the specified GetResponse message. Does not implicitly {@link bar.baz.boo.GetResponse.verify|verify} messages.
                 * @function encode
                 * @memberof bar.baz.boo.GetResponse
                 * @static
                 * @param {bar.baz.boo.IGetResponse} message GetResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified GetResponse message, length delimited. Does not implicitly {@link bar.baz.boo.GetResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof bar.baz.boo.GetResponse
                 * @static
                 * @param {bar.baz.boo.IGetResponse} message GetResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof bar.baz.boo.GetResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {bar.baz.boo.GetResponse} GetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bar.baz.boo.GetResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof bar.baz.boo.GetResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {bar.baz.boo.GetResponse} GetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetResponse message.
                 * @function verify
                 * @memberof bar.baz.boo.GetResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a GetResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof bar.baz.boo.GetResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {bar.baz.boo.GetResponse} GetResponse
                 */
                GetResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.bar.baz.boo.GetResponse)
                        return object;
                    return new $root.bar.baz.boo.GetResponse();
                };

                /**
                 * Creates a plain object from a GetResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof bar.baz.boo.GetResponse
                 * @static
                 * @param {bar.baz.boo.GetResponse} message GetResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this GetResponse to JSON.
                 * @function toJSON
                 * @memberof bar.baz.boo.GetResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetResponse
                 * @function getTypeUrl
                 * @memberof bar.baz.boo.GetResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/bar.baz.boo.GetResponse";
                };

                return GetResponse;
            })();

            boo.SetRequest = (function() {

                /**
                 * Properties of a SetRequest.
                 * @memberof bar.baz.boo
                 * @interface ISetRequest
                 */

                /**
                 * Constructs a new SetRequest.
                 * @memberof bar.baz.boo
                 * @classdesc Represents a SetRequest.
                 * @implements ISetRequest
                 * @constructor
                 * @param {bar.baz.boo.ISetRequest=} [properties] Properties to set
                 */
                function SetRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new SetRequest instance using the specified properties.
                 * @function create
                 * @memberof bar.baz.boo.SetRequest
                 * @static
                 * @param {bar.baz.boo.ISetRequest=} [properties] Properties to set
                 * @returns {bar.baz.boo.SetRequest} SetRequest instance
                 */
                SetRequest.create = function create(properties) {
                    return new SetRequest(properties);
                };

                /**
                 * Encodes the specified SetRequest message. Does not implicitly {@link bar.baz.boo.SetRequest.verify|verify} messages.
                 * @function encode
                 * @memberof bar.baz.boo.SetRequest
                 * @static
                 * @param {bar.baz.boo.ISetRequest} message SetRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified SetRequest message, length delimited. Does not implicitly {@link bar.baz.boo.SetRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof bar.baz.boo.SetRequest
                 * @static
                 * @param {bar.baz.boo.ISetRequest} message SetRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SetRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof bar.baz.boo.SetRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {bar.baz.boo.SetRequest} SetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bar.baz.boo.SetRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SetRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof bar.baz.boo.SetRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {bar.baz.boo.SetRequest} SetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SetRequest message.
                 * @function verify
                 * @memberof bar.baz.boo.SetRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SetRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a SetRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof bar.baz.boo.SetRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {bar.baz.boo.SetRequest} SetRequest
                 */
                SetRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.bar.baz.boo.SetRequest)
                        return object;
                    return new $root.bar.baz.boo.SetRequest();
                };

                /**
                 * Creates a plain object from a SetRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof bar.baz.boo.SetRequest
                 * @static
                 * @param {bar.baz.boo.SetRequest} message SetRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SetRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this SetRequest to JSON.
                 * @function toJSON
                 * @memberof bar.baz.boo.SetRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SetRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SetRequest
                 * @function getTypeUrl
                 * @memberof bar.baz.boo.SetRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SetRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/bar.baz.boo.SetRequest";
                };

                return SetRequest;
            })();

            boo.SetResponse = (function() {

                /**
                 * Properties of a SetResponse.
                 * @memberof bar.baz.boo
                 * @interface ISetResponse
                 */

                /**
                 * Constructs a new SetResponse.
                 * @memberof bar.baz.boo
                 * @classdesc Represents a SetResponse.
                 * @implements ISetResponse
                 * @constructor
                 * @param {bar.baz.boo.ISetResponse=} [properties] Properties to set
                 */
                function SetResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new SetResponse instance using the specified properties.
                 * @function create
                 * @memberof bar.baz.boo.SetResponse
                 * @static
                 * @param {bar.baz.boo.ISetResponse=} [properties] Properties to set
                 * @returns {bar.baz.boo.SetResponse} SetResponse instance
                 */
                SetResponse.create = function create(properties) {
                    return new SetResponse(properties);
                };

                /**
                 * Encodes the specified SetResponse message. Does not implicitly {@link bar.baz.boo.SetResponse.verify|verify} messages.
                 * @function encode
                 * @memberof bar.baz.boo.SetResponse
                 * @static
                 * @param {bar.baz.boo.ISetResponse} message SetResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified SetResponse message, length delimited. Does not implicitly {@link bar.baz.boo.SetResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof bar.baz.boo.SetResponse
                 * @static
                 * @param {bar.baz.boo.ISetResponse} message SetResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SetResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof bar.baz.boo.SetResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {bar.baz.boo.SetResponse} SetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bar.baz.boo.SetResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SetResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof bar.baz.boo.SetResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {bar.baz.boo.SetResponse} SetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SetResponse message.
                 * @function verify
                 * @memberof bar.baz.boo.SetResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SetResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a SetResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof bar.baz.boo.SetResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {bar.baz.boo.SetResponse} SetResponse
                 */
                SetResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.bar.baz.boo.SetResponse)
                        return object;
                    return new $root.bar.baz.boo.SetResponse();
                };

                /**
                 * Creates a plain object from a SetResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof bar.baz.boo.SetResponse
                 * @static
                 * @param {bar.baz.boo.SetResponse} message SetResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SetResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this SetResponse to JSON.
                 * @function toJSON
                 * @memberof bar.baz.boo.SetResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SetResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SetResponse
                 * @function getTypeUrl
                 * @memberof bar.baz.boo.SetResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SetResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/bar.baz.boo.SetResponse";
                };

                return SetResponse;
            })();

            boo.Moo = (function() {

                /**
                 * Properties of a Moo.
                 * @memberof bar.baz.boo
                 * @interface IMoo
                 */

                /**
                 * Constructs a new Moo.
                 * @memberof bar.baz.boo
                 * @classdesc Represents a Moo.
                 * @implements IMoo
                 * @constructor
                 * @param {bar.baz.boo.IMoo=} [properties] Properties to set
                 */
                function Moo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new Moo instance using the specified properties.
                 * @function create
                 * @memberof bar.baz.boo.Moo
                 * @static
                 * @param {bar.baz.boo.IMoo=} [properties] Properties to set
                 * @returns {bar.baz.boo.Moo} Moo instance
                 */
                Moo.create = function create(properties) {
                    return new Moo(properties);
                };

                /**
                 * Encodes the specified Moo message. Does not implicitly {@link bar.baz.boo.Moo.verify|verify} messages.
                 * @function encode
                 * @memberof bar.baz.boo.Moo
                 * @static
                 * @param {bar.baz.boo.IMoo} message Moo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Moo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified Moo message, length delimited. Does not implicitly {@link bar.baz.boo.Moo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof bar.baz.boo.Moo
                 * @static
                 * @param {bar.baz.boo.IMoo} message Moo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Moo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Moo message from the specified reader or buffer.
                 * @function decode
                 * @memberof bar.baz.boo.Moo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {bar.baz.boo.Moo} Moo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Moo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bar.baz.boo.Moo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Moo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof bar.baz.boo.Moo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {bar.baz.boo.Moo} Moo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Moo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Moo message.
                 * @function verify
                 * @memberof bar.baz.boo.Moo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Moo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a Moo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof bar.baz.boo.Moo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {bar.baz.boo.Moo} Moo
                 */
                Moo.fromObject = function fromObject(object) {
                    if (object instanceof $root.bar.baz.boo.Moo)
                        return object;
                    return new $root.bar.baz.boo.Moo();
                };

                /**
                 * Creates a plain object from a Moo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof bar.baz.boo.Moo
                 * @static
                 * @param {bar.baz.boo.Moo} message Moo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Moo.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Moo to JSON.
                 * @function toJSON
                 * @memberof bar.baz.boo.Moo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Moo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Moo
                 * @function getTypeUrl
                 * @memberof bar.baz.boo.Moo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Moo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/bar.baz.boo.Moo";
                };

                Moo.Coo = (function() {

                    /**
                     * Properties of a Coo.
                     * @memberof bar.baz.boo.Moo
                     * @interface ICoo
                     */

                    /**
                     * Constructs a new Coo.
                     * @memberof bar.baz.boo.Moo
                     * @classdesc Represents a Coo.
                     * @implements ICoo
                     * @constructor
                     * @param {bar.baz.boo.Moo.ICoo=} [properties] Properties to set
                     */
                    function Coo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new Coo instance using the specified properties.
                     * @function create
                     * @memberof bar.baz.boo.Moo.Coo
                     * @static
                     * @param {bar.baz.boo.Moo.ICoo=} [properties] Properties to set
                     * @returns {bar.baz.boo.Moo.Coo} Coo instance
                     */
                    Coo.create = function create(properties) {
                        return new Coo(properties);
                    };

                    /**
                     * Encodes the specified Coo message. Does not implicitly {@link bar.baz.boo.Moo.Coo.verify|verify} messages.
                     * @function encode
                     * @memberof bar.baz.boo.Moo.Coo
                     * @static
                     * @param {bar.baz.boo.Moo.ICoo} message Coo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Coo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified Coo message, length delimited. Does not implicitly {@link bar.baz.boo.Moo.Coo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof bar.baz.boo.Moo.Coo
                     * @static
                     * @param {bar.baz.boo.Moo.ICoo} message Coo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Coo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Coo message from the specified reader or buffer.
                     * @function decode
                     * @memberof bar.baz.boo.Moo.Coo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {bar.baz.boo.Moo.Coo} Coo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Coo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bar.baz.boo.Moo.Coo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Coo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof bar.baz.boo.Moo.Coo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {bar.baz.boo.Moo.Coo} Coo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Coo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Coo message.
                     * @function verify
                     * @memberof bar.baz.boo.Moo.Coo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Coo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a Coo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof bar.baz.boo.Moo.Coo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {bar.baz.boo.Moo.Coo} Coo
                     */
                    Coo.fromObject = function fromObject(object) {
                        if (object instanceof $root.bar.baz.boo.Moo.Coo)
                            return object;
                        return new $root.bar.baz.boo.Moo.Coo();
                    };

                    /**
                     * Creates a plain object from a Coo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof bar.baz.boo.Moo.Coo
                     * @static
                     * @param {bar.baz.boo.Moo.Coo} message Coo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Coo.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this Coo to JSON.
                     * @function toJSON
                     * @memberof bar.baz.boo.Moo.Coo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Coo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Coo
                     * @function getTypeUrl
                     * @memberof bar.baz.boo.Moo.Coo
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Coo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/bar.baz.boo.Moo.Coo";
                    };

                    Coo.Doo = (function() {

                        /**
                         * Properties of a Doo.
                         * @memberof bar.baz.boo.Moo.Coo
                         * @interface IDoo
                         * @property {bar.baz.boo.Moo.Coo.Doo.VeryDeep|null} [field] Doo field
                         */

                        /**
                         * Constructs a new Doo.
                         * @memberof bar.baz.boo.Moo.Coo
                         * @classdesc Represents a Doo.
                         * @implements IDoo
                         * @constructor
                         * @param {bar.baz.boo.Moo.Coo.IDoo=} [properties] Properties to set
                         */
                        function Doo(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Doo field.
                         * @member {bar.baz.boo.Moo.Coo.Doo.VeryDeep} field
                         * @memberof bar.baz.boo.Moo.Coo.Doo
                         * @instance
                         */
                        Doo.prototype.field = 0;

                        /**
                         * Creates a new Doo instance using the specified properties.
                         * @function create
                         * @memberof bar.baz.boo.Moo.Coo.Doo
                         * @static
                         * @param {bar.baz.boo.Moo.Coo.IDoo=} [properties] Properties to set
                         * @returns {bar.baz.boo.Moo.Coo.Doo} Doo instance
                         */
                        Doo.create = function create(properties) {
                            return new Doo(properties);
                        };

                        /**
                         * Encodes the specified Doo message. Does not implicitly {@link bar.baz.boo.Moo.Coo.Doo.verify|verify} messages.
                         * @function encode
                         * @memberof bar.baz.boo.Moo.Coo.Doo
                         * @static
                         * @param {bar.baz.boo.Moo.Coo.IDoo} message Doo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Doo.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.field);
                            return writer;
                        };

                        /**
                         * Encodes the specified Doo message, length delimited. Does not implicitly {@link bar.baz.boo.Moo.Coo.Doo.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bar.baz.boo.Moo.Coo.Doo
                         * @static
                         * @param {bar.baz.boo.Moo.Coo.IDoo} message Doo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Doo.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Doo message from the specified reader or buffer.
                         * @function decode
                         * @memberof bar.baz.boo.Moo.Coo.Doo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bar.baz.boo.Moo.Coo.Doo} Doo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Doo.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bar.baz.boo.Moo.Coo.Doo();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.field = reader.int32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Doo message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bar.baz.boo.Moo.Coo.Doo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bar.baz.boo.Moo.Coo.Doo} Doo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Doo.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Doo message.
                         * @function verify
                         * @memberof bar.baz.boo.Moo.Coo.Doo
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Doo.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.field != null && message.hasOwnProperty("field"))
                                switch (message.field) {
                                default:
                                    return "field: enum value expected";
                                case 0:
                                case 1:
                                    break;
                                }
                            return null;
                        };

                        /**
                         * Creates a Doo message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bar.baz.boo.Moo.Coo.Doo
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bar.baz.boo.Moo.Coo.Doo} Doo
                         */
                        Doo.fromObject = function fromObject(object) {
                            if (object instanceof $root.bar.baz.boo.Moo.Coo.Doo)
                                return object;
                            var message = new $root.bar.baz.boo.Moo.Coo.Doo();
                            switch (object.field) {
                            default:
                                if (typeof object.field === "number") {
                                    message.field = object.field;
                                    break;
                                }
                                break;
                            case "VERY_DEEP_UNKNOWN":
                            case 0:
                                message.field = 0;
                                break;
                            case "VERY_DEEP_KNOWN":
                            case 1:
                                message.field = 1;
                                break;
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Doo message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bar.baz.boo.Moo.Coo.Doo
                         * @static
                         * @param {bar.baz.boo.Moo.Coo.Doo} message Doo
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Doo.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.field = options.enums === String ? "VERY_DEEP_UNKNOWN" : 0;
                            if (message.field != null && message.hasOwnProperty("field"))
                                object.field = options.enums === String ? $root.bar.baz.boo.Moo.Coo.Doo.VeryDeep[message.field] === undefined ? message.field : $root.bar.baz.boo.Moo.Coo.Doo.VeryDeep[message.field] : message.field;
                            return object;
                        };

                        /**
                         * Converts this Doo to JSON.
                         * @function toJSON
                         * @memberof bar.baz.boo.Moo.Coo.Doo
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Doo.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Doo
                         * @function getTypeUrl
                         * @memberof bar.baz.boo.Moo.Coo.Doo
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Doo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/bar.baz.boo.Moo.Coo.Doo";
                        };

                        /**
                         * VeryDeep enum.
                         * @name bar.baz.boo.Moo.Coo.Doo.VeryDeep
                         * @enum {number}
                         * @property {number} VERY_DEEP_UNKNOWN=0 VERY_DEEP_UNKNOWN value
                         * @property {number} VERY_DEEP_KNOWN=1 VERY_DEEP_KNOWN value
                         */
                        Doo.VeryDeep = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "VERY_DEEP_UNKNOWN"] = 0;
                            values[valuesById[1] = "VERY_DEEP_KNOWN"] = 1;
                            return values;
                        })();

                        return Doo;
                    })();

                    /**
                     * LessDeeper enum.
                     * @name bar.baz.boo.Moo.Coo.LessDeeper
                     * @enum {number}
                     * @property {number} LESS_DEEPER_UNKNOWN=0 LESS_DEEPER_UNKNOWN value
                     * @property {number} LESS_DEEPER_KNOWN=1 LESS_DEEPER_KNOWN value
                     */
                    Coo.LessDeeper = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "LESS_DEEPER_UNKNOWN"] = 0;
                        values[valuesById[1] = "LESS_DEEPER_KNOWN"] = 1;
                        return values;
                    })();

                    return Coo;
                })();

                Moo.Goo = (function() {

                    /**
                     * Properties of a Goo.
                     * @memberof bar.baz.boo.Moo
                     * @interface IGoo
                     */

                    /**
                     * Constructs a new Goo.
                     * @memberof bar.baz.boo.Moo
                     * @classdesc Represents a Goo.
                     * @implements IGoo
                     * @constructor
                     * @param {bar.baz.boo.Moo.IGoo=} [properties] Properties to set
                     */
                    function Goo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new Goo instance using the specified properties.
                     * @function create
                     * @memberof bar.baz.boo.Moo.Goo
                     * @static
                     * @param {bar.baz.boo.Moo.IGoo=} [properties] Properties to set
                     * @returns {bar.baz.boo.Moo.Goo} Goo instance
                     */
                    Goo.create = function create(properties) {
                        return new Goo(properties);
                    };

                    /**
                     * Encodes the specified Goo message. Does not implicitly {@link bar.baz.boo.Moo.Goo.verify|verify} messages.
                     * @function encode
                     * @memberof bar.baz.boo.Moo.Goo
                     * @static
                     * @param {bar.baz.boo.Moo.IGoo} message Goo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Goo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified Goo message, length delimited. Does not implicitly {@link bar.baz.boo.Moo.Goo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof bar.baz.boo.Moo.Goo
                     * @static
                     * @param {bar.baz.boo.Moo.IGoo} message Goo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Goo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Goo message from the specified reader or buffer.
                     * @function decode
                     * @memberof bar.baz.boo.Moo.Goo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {bar.baz.boo.Moo.Goo} Goo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Goo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bar.baz.boo.Moo.Goo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Goo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof bar.baz.boo.Moo.Goo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {bar.baz.boo.Moo.Goo} Goo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Goo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Goo message.
                     * @function verify
                     * @memberof bar.baz.boo.Moo.Goo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Goo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a Goo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof bar.baz.boo.Moo.Goo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {bar.baz.boo.Moo.Goo} Goo
                     */
                    Goo.fromObject = function fromObject(object) {
                        if (object instanceof $root.bar.baz.boo.Moo.Goo)
                            return object;
                        return new $root.bar.baz.boo.Moo.Goo();
                    };

                    /**
                     * Creates a plain object from a Goo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof bar.baz.boo.Moo.Goo
                     * @static
                     * @param {bar.baz.boo.Moo.Goo} message Goo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Goo.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this Goo to JSON.
                     * @function toJSON
                     * @memberof bar.baz.boo.Moo.Goo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Goo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Goo
                     * @function getTypeUrl
                     * @memberof bar.baz.boo.Moo.Goo
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Goo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/bar.baz.boo.Moo.Goo";
                    };

                    return Goo;
                })();

                return Moo;
            })();

            /**
             * DeepEnum enum.
             * @name bar.baz.boo.DeepEnum
             * @enum {number}
             * @property {number} DEEP_ENUM_UNKNOWN=0 DEEP_ENUM_UNKNOWN value
             * @property {number} DEEP_ENUM_KNOWN=1 DEEP_ENUM_KNOWN value
             */
            boo.DeepEnum = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DEEP_ENUM_UNKNOWN"] = 0;
                values[valuesById[1] = "DEEP_ENUM_KNOWN"] = 1;
                return values;
            })();

            return boo;
        })();

        return baz;
    })();

    return bar;
})();

$root.empty = (function() {

    /**
     * Namespace empty.
     * @exports empty
     * @namespace
     */
    var empty = {};

    return empty;
})();

$root.foo = (function() {

    /**
     * Namespace foo.
     * @exports foo
     * @namespace
     */
    var foo = {};

    foo.Foo = (function() {

        /**
         * Properties of a Foo.
         * @memberof foo
         * @interface IFoo
         * @property {string|null} [s] Foo s
         * @property {boolean|null} [b] Foo b
         * @property {number|null} [i32] Foo i32
         * @property {number|null} [d] Foo d
         * @property {number|null} [f] Foo f
         * @property {number|Long|null} [i64] Foo i64
         * @property {number|null} [ui32] Foo ui32
         * @property {number|Long|null} [ui64] Foo ui64
         * @property {number|null} [si32] Foo si32
         * @property {number|Long|null} [si64] Foo si64
         * @property {number|null} [f32] Foo f32
         * @property {number|Long|null} [f64] Foo f64
         * @property {number|null} [sf32] Foo sf32
         * @property {number|Long|null} [sf64] Foo sf64
         * @property {Uint8Array|null} [by] Foo by
         * @property {foo.Foo.IDeeperNested|null} [nested] Foo nested
         * @property {Array.<foo.Foo.IDeeperNested>|null} [nested_array] Foo nested_array
         * @property {Object.<string,foo.Foo.IDeeperNested>|null} [nested_map] Foo nested_map
         * @property {Object.<string,number|Long>|null} [map_string_int64] Foo map_string_int64
         * @property {Object.<string,string>|null} [map_int32_string] Foo map_int32_string
         * @property {Object.<string,foo.E>|null} [map_uint64_e] Foo map_uint64_e
         * @property {Array.<string>|null} [string_array] Foo string_array
         * @property {string|null} [oneof_regular] Foo oneof_regular
         * @property {foo.Foo.IDeeperNested|null} [oneof_nested] Foo oneof_nested
         * @property {foo.E|null} [e] Foo e
         * @property {bar.baz.boo.IGetRequest|null} [boo] Foo boo
         */

        /**
         * Constructs a new Foo.
         * @memberof foo
         * @classdesc Represents a Foo.
         * @implements IFoo
         * @constructor
         * @param {foo.IFoo=} [properties] Properties to set
         */
        function Foo(properties) {
            this.nested_array = [];
            this.nested_map = {};
            this.map_string_int64 = {};
            this.map_int32_string = {};
            this.map_uint64_e = {};
            this.string_array = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Foo s.
         * @member {string} s
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.s = "";

        /**
         * Foo b.
         * @member {boolean} b
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.b = false;

        /**
         * Foo i32.
         * @member {number} i32
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.i32 = 0;

        /**
         * Foo d.
         * @member {number} d
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.d = 0;

        /**
         * Foo f.
         * @member {number} f
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.f = 0;

        /**
         * Foo i64.
         * @member {number|Long} i64
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.i64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Foo ui32.
         * @member {number} ui32
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.ui32 = 0;

        /**
         * Foo ui64.
         * @member {number|Long} ui64
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.ui64 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Foo si32.
         * @member {number} si32
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.si32 = 0;

        /**
         * Foo si64.
         * @member {number|Long} si64
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.si64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Foo f32.
         * @member {number} f32
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.f32 = 0;

        /**
         * Foo f64.
         * @member {number|Long} f64
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.f64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Foo sf32.
         * @member {number} sf32
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.sf32 = 0;

        /**
         * Foo sf64.
         * @member {number|Long} sf64
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.sf64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Foo by.
         * @member {Uint8Array} by
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.by = $util.newBuffer([]);

        /**
         * Foo nested.
         * @member {foo.Foo.IDeeperNested|null|undefined} nested
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.nested = null;

        /**
         * Foo nested_array.
         * @member {Array.<foo.Foo.IDeeperNested>} nested_array
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.nested_array = $util.emptyArray;

        /**
         * Foo nested_map.
         * @member {Object.<string,foo.Foo.IDeeperNested>} nested_map
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.nested_map = $util.emptyObject;

        /**
         * Foo map_string_int64.
         * @member {Object.<string,number|Long>} map_string_int64
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.map_string_int64 = $util.emptyObject;

        /**
         * Foo map_int32_string.
         * @member {Object.<string,string>} map_int32_string
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.map_int32_string = $util.emptyObject;

        /**
         * Foo map_uint64_e.
         * @member {Object.<string,foo.E>} map_uint64_e
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.map_uint64_e = $util.emptyObject;

        /**
         * Foo string_array.
         * @member {Array.<string>} string_array
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.string_array = $util.emptyArray;

        /**
         * Foo oneof_regular.
         * @member {string|null|undefined} oneof_regular
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.oneof_regular = null;

        /**
         * Foo oneof_nested.
         * @member {foo.Foo.IDeeperNested|null|undefined} oneof_nested
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.oneof_nested = null;

        /**
         * Foo e.
         * @member {foo.E} e
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.e = 0;

        /**
         * Foo boo.
         * @member {bar.baz.boo.IGetRequest|null|undefined} boo
         * @memberof foo.Foo
         * @instance
         */
        Foo.prototype.boo = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Foo nested_oneof.
         * @member {"oneof_regular"|"oneof_nested"|undefined} nested_oneof
         * @memberof foo.Foo
         * @instance
         */
        Object.defineProperty(Foo.prototype, "nested_oneof", {
            get: $util.oneOfGetter($oneOfFields = ["oneof_regular", "oneof_nested"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Foo instance using the specified properties.
         * @function create
         * @memberof foo.Foo
         * @static
         * @param {foo.IFoo=} [properties] Properties to set
         * @returns {foo.Foo} Foo instance
         */
        Foo.create = function create(properties) {
            return new Foo(properties);
        };

        /**
         * Encodes the specified Foo message. Does not implicitly {@link foo.Foo.verify|verify} messages.
         * @function encode
         * @memberof foo.Foo
         * @static
         * @param {foo.IFoo} message Foo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Foo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.s != null && Object.hasOwnProperty.call(message, "s"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.s);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.b);
            if (message.i32 != null && Object.hasOwnProperty.call(message, "i32"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.i32);
            if (message.d != null && Object.hasOwnProperty.call(message, "d"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.d);
            if (message.f != null && Object.hasOwnProperty.call(message, "f"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.f);
            if (message.i64 != null && Object.hasOwnProperty.call(message, "i64"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.i64);
            if (message.ui32 != null && Object.hasOwnProperty.call(message, "ui32"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.ui32);
            if (message.ui64 != null && Object.hasOwnProperty.call(message, "ui64"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.ui64);
            if (message.si32 != null && Object.hasOwnProperty.call(message, "si32"))
                writer.uint32(/* id 9, wireType 0 =*/72).sint32(message.si32);
            if (message.si64 != null && Object.hasOwnProperty.call(message, "si64"))
                writer.uint32(/* id 10, wireType 0 =*/80).sint64(message.si64);
            if (message.f32 != null && Object.hasOwnProperty.call(message, "f32"))
                writer.uint32(/* id 11, wireType 5 =*/93).fixed32(message.f32);
            if (message.f64 != null && Object.hasOwnProperty.call(message, "f64"))
                writer.uint32(/* id 12, wireType 1 =*/97).fixed64(message.f64);
            if (message.sf32 != null && Object.hasOwnProperty.call(message, "sf32"))
                writer.uint32(/* id 13, wireType 5 =*/109).sfixed32(message.sf32);
            if (message.sf64 != null && Object.hasOwnProperty.call(message, "sf64"))
                writer.uint32(/* id 14, wireType 1 =*/113).sfixed64(message.sf64);
            if (message.by != null && Object.hasOwnProperty.call(message, "by"))
                writer.uint32(/* id 15, wireType 2 =*/122).bytes(message.by);
            if (message.nested != null && Object.hasOwnProperty.call(message, "nested"))
                $root.foo.Foo.DeeperNested.encode(message.nested, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.nested_array != null && message.nested_array.length)
                for (var i = 0; i < message.nested_array.length; ++i)
                    $root.foo.Foo.DeeperNested.encode(message.nested_array[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.nested_map != null && Object.hasOwnProperty.call(message, "nested_map"))
                for (var keys = Object.keys(message.nested_map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 18, wireType 2 =*/146).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.foo.Foo.DeeperNested.encode(message.nested_map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.map_string_int64 != null && Object.hasOwnProperty.call(message, "map_string_int64"))
                for (var keys = Object.keys(message.map_string_int64), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 19, wireType 2 =*/154).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.map_string_int64[keys[i]]).ldelim();
            if (message.map_int32_string != null && Object.hasOwnProperty.call(message, "map_int32_string"))
                for (var keys = Object.keys(message.map_int32_string), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 20, wireType 2 =*/162).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.map_int32_string[keys[i]]).ldelim();
            if (message.string_array != null && message.string_array.length)
                for (var i = 0; i < message.string_array.length; ++i)
                    writer.uint32(/* id 21, wireType 2 =*/170).string(message.string_array[i]);
            if (message.oneof_regular != null && Object.hasOwnProperty.call(message, "oneof_regular"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.oneof_regular);
            if (message.oneof_nested != null && Object.hasOwnProperty.call(message, "oneof_nested"))
                $root.foo.Foo.DeeperNested.encode(message.oneof_nested, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.e != null && Object.hasOwnProperty.call(message, "e"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.e);
            if (message.map_uint64_e != null && Object.hasOwnProperty.call(message, "map_uint64_e"))
                for (var keys = Object.keys(message.map_uint64_e), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 25, wireType 2 =*/202).fork().uint32(/* id 1, wireType 0 =*/8).uint64(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.map_uint64_e[keys[i]]).ldelim();
            if (message.boo != null && Object.hasOwnProperty.call(message, "boo"))
                $root.bar.baz.boo.GetRequest.encode(message.boo, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Foo message, length delimited. Does not implicitly {@link foo.Foo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foo.Foo
         * @static
         * @param {foo.IFoo} message Foo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Foo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Foo message from the specified reader or buffer.
         * @function decode
         * @memberof foo.Foo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foo.Foo} Foo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Foo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foo.Foo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.s = reader.string();
                        break;
                    }
                case 2: {
                        message.b = reader.bool();
                        break;
                    }
                case 3: {
                        message.i32 = reader.int32();
                        break;
                    }
                case 4: {
                        message.d = reader.double();
                        break;
                    }
                case 5: {
                        message.f = reader.float();
                        break;
                    }
                case 6: {
                        message.i64 = reader.int64();
                        break;
                    }
                case 7: {
                        message.ui32 = reader.uint32();
                        break;
                    }
                case 8: {
                        message.ui64 = reader.uint64();
                        break;
                    }
                case 9: {
                        message.si32 = reader.sint32();
                        break;
                    }
                case 10: {
                        message.si64 = reader.sint64();
                        break;
                    }
                case 11: {
                        message.f32 = reader.fixed32();
                        break;
                    }
                case 12: {
                        message.f64 = reader.fixed64();
                        break;
                    }
                case 13: {
                        message.sf32 = reader.sfixed32();
                        break;
                    }
                case 14: {
                        message.sf64 = reader.sfixed64();
                        break;
                    }
                case 15: {
                        message.by = reader.bytes();
                        break;
                    }
                case 16: {
                        message.nested = $root.foo.Foo.DeeperNested.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        if (!(message.nested_array && message.nested_array.length))
                            message.nested_array = [];
                        message.nested_array.push($root.foo.Foo.DeeperNested.decode(reader, reader.uint32()));
                        break;
                    }
                case 18: {
                        if (message.nested_map === $util.emptyObject)
                            message.nested_map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.foo.Foo.DeeperNested.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.nested_map[key] = value;
                        break;
                    }
                case 19: {
                        if (message.map_string_int64 === $util.emptyObject)
                            message.map_string_int64 = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.int64();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.map_string_int64[key] = value;
                        break;
                    }
                case 20: {
                        if (message.map_int32_string === $util.emptyObject)
                            message.map_int32_string = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.map_int32_string[key] = value;
                        break;
                    }
                case 25: {
                        if (message.map_uint64_e === $util.emptyObject)
                            message.map_uint64_e = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint64();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.map_uint64_e[typeof key === "object" ? $util.longToHash(key) : key] = value;
                        break;
                    }
                case 21: {
                        if (!(message.string_array && message.string_array.length))
                            message.string_array = [];
                        message.string_array.push(reader.string());
                        break;
                    }
                case 22: {
                        message.oneof_regular = reader.string();
                        break;
                    }
                case 23: {
                        message.oneof_nested = $root.foo.Foo.DeeperNested.decode(reader, reader.uint32());
                        break;
                    }
                case 24: {
                        message.e = reader.int32();
                        break;
                    }
                case 26: {
                        message.boo = $root.bar.baz.boo.GetRequest.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Foo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foo.Foo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foo.Foo} Foo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Foo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Foo message.
         * @function verify
         * @memberof foo.Foo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Foo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.s != null && message.hasOwnProperty("s"))
                if (!$util.isString(message.s))
                    return "s: string expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (typeof message.b !== "boolean")
                    return "b: boolean expected";
            if (message.i32 != null && message.hasOwnProperty("i32"))
                if (!$util.isInteger(message.i32))
                    return "i32: integer expected";
            if (message.d != null && message.hasOwnProperty("d"))
                if (typeof message.d !== "number")
                    return "d: number expected";
            if (message.f != null && message.hasOwnProperty("f"))
                if (typeof message.f !== "number")
                    return "f: number expected";
            if (message.i64 != null && message.hasOwnProperty("i64"))
                if (!$util.isInteger(message.i64) && !(message.i64 && $util.isInteger(message.i64.low) && $util.isInteger(message.i64.high)))
                    return "i64: integer|Long expected";
            if (message.ui32 != null && message.hasOwnProperty("ui32"))
                if (!$util.isInteger(message.ui32))
                    return "ui32: integer expected";
            if (message.ui64 != null && message.hasOwnProperty("ui64"))
                if (!$util.isInteger(message.ui64) && !(message.ui64 && $util.isInteger(message.ui64.low) && $util.isInteger(message.ui64.high)))
                    return "ui64: integer|Long expected";
            if (message.si32 != null && message.hasOwnProperty("si32"))
                if (!$util.isInteger(message.si32))
                    return "si32: integer expected";
            if (message.si64 != null && message.hasOwnProperty("si64"))
                if (!$util.isInteger(message.si64) && !(message.si64 && $util.isInteger(message.si64.low) && $util.isInteger(message.si64.high)))
                    return "si64: integer|Long expected";
            if (message.f32 != null && message.hasOwnProperty("f32"))
                if (!$util.isInteger(message.f32))
                    return "f32: integer expected";
            if (message.f64 != null && message.hasOwnProperty("f64"))
                if (!$util.isInteger(message.f64) && !(message.f64 && $util.isInteger(message.f64.low) && $util.isInteger(message.f64.high)))
                    return "f64: integer|Long expected";
            if (message.sf32 != null && message.hasOwnProperty("sf32"))
                if (!$util.isInteger(message.sf32))
                    return "sf32: integer expected";
            if (message.sf64 != null && message.hasOwnProperty("sf64"))
                if (!$util.isInteger(message.sf64) && !(message.sf64 && $util.isInteger(message.sf64.low) && $util.isInteger(message.sf64.high)))
                    return "sf64: integer|Long expected";
            if (message.by != null && message.hasOwnProperty("by"))
                if (!(message.by && typeof message.by.length === "number" || $util.isString(message.by)))
                    return "by: buffer expected";
            if (message.nested != null && message.hasOwnProperty("nested")) {
                var error = $root.foo.Foo.DeeperNested.verify(message.nested);
                if (error)
                    return "nested." + error;
            }
            if (message.nested_array != null && message.hasOwnProperty("nested_array")) {
                if (!Array.isArray(message.nested_array))
                    return "nested_array: array expected";
                for (var i = 0; i < message.nested_array.length; ++i) {
                    var error = $root.foo.Foo.DeeperNested.verify(message.nested_array[i]);
                    if (error)
                        return "nested_array." + error;
                }
            }
            if (message.nested_map != null && message.hasOwnProperty("nested_map")) {
                if (!$util.isObject(message.nested_map))
                    return "nested_map: object expected";
                var key = Object.keys(message.nested_map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.foo.Foo.DeeperNested.verify(message.nested_map[key[i]]);
                    if (error)
                        return "nested_map." + error;
                }
            }
            if (message.map_string_int64 != null && message.hasOwnProperty("map_string_int64")) {
                if (!$util.isObject(message.map_string_int64))
                    return "map_string_int64: object expected";
                var key = Object.keys(message.map_string_int64);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.map_string_int64[key[i]]) && !(message.map_string_int64[key[i]] && $util.isInteger(message.map_string_int64[key[i]].low) && $util.isInteger(message.map_string_int64[key[i]].high)))
                        return "map_string_int64: integer|Long{k:string} expected";
            }
            if (message.map_int32_string != null && message.hasOwnProperty("map_int32_string")) {
                if (!$util.isObject(message.map_int32_string))
                    return "map_int32_string: object expected";
                var key = Object.keys(message.map_int32_string);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "map_int32_string: integer key{k:int32} expected";
                    if (!$util.isString(message.map_int32_string[key[i]]))
                        return "map_int32_string: string{k:int32} expected";
                }
            }
            if (message.map_uint64_e != null && message.hasOwnProperty("map_uint64_e")) {
                if (!$util.isObject(message.map_uint64_e))
                    return "map_uint64_e: object expected";
                var key = Object.keys(message.map_uint64_e);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "map_uint64_e: integer|Long key{k:uint64} expected";
                    switch (message.map_uint64_e[key[i]]) {
                    default:
                        return "map_uint64_e: enum value{k:uint64} expected";
                    case 0:
                    case 1:
                        break;
                    }
                }
            }
            if (message.string_array != null && message.hasOwnProperty("string_array")) {
                if (!Array.isArray(message.string_array))
                    return "string_array: array expected";
                for (var i = 0; i < message.string_array.length; ++i)
                    if (!$util.isString(message.string_array[i]))
                        return "string_array: string[] expected";
            }
            if (message.oneof_regular != null && message.hasOwnProperty("oneof_regular")) {
                properties.nested_oneof = 1;
                if (!$util.isString(message.oneof_regular))
                    return "oneof_regular: string expected";
            }
            if (message.oneof_nested != null && message.hasOwnProperty("oneof_nested")) {
                if (properties.nested_oneof === 1)
                    return "nested_oneof: multiple values";
                properties.nested_oneof = 1;
                {
                    var error = $root.foo.Foo.DeeperNested.verify(message.oneof_nested);
                    if (error)
                        return "oneof_nested." + error;
                }
            }
            if (message.e != null && message.hasOwnProperty("e"))
                switch (message.e) {
                default:
                    return "e: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.boo != null && message.hasOwnProperty("boo")) {
                var error = $root.bar.baz.boo.GetRequest.verify(message.boo);
                if (error)
                    return "boo." + error;
            }
            return null;
        };

        /**
         * Creates a Foo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foo.Foo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foo.Foo} Foo
         */
        Foo.fromObject = function fromObject(object) {
            if (object instanceof $root.foo.Foo)
                return object;
            var message = new $root.foo.Foo();
            if (object.s != null)
                message.s = String(object.s);
            if (object.b != null)
                message.b = Boolean(object.b);
            if (object.i32 != null)
                message.i32 = object.i32 | 0;
            if (object.d != null)
                message.d = Number(object.d);
            if (object.f != null)
                message.f = Number(object.f);
            if (object.i64 != null)
                if ($util.Long)
                    (message.i64 = $util.Long.fromValue(object.i64)).unsigned = false;
                else if (typeof object.i64 === "string")
                    message.i64 = parseInt(object.i64, 10);
                else if (typeof object.i64 === "number")
                    message.i64 = object.i64;
                else if (typeof object.i64 === "object")
                    message.i64 = new $util.LongBits(object.i64.low >>> 0, object.i64.high >>> 0).toNumber();
            if (object.ui32 != null)
                message.ui32 = object.ui32 >>> 0;
            if (object.ui64 != null)
                if ($util.Long)
                    (message.ui64 = $util.Long.fromValue(object.ui64)).unsigned = true;
                else if (typeof object.ui64 === "string")
                    message.ui64 = parseInt(object.ui64, 10);
                else if (typeof object.ui64 === "number")
                    message.ui64 = object.ui64;
                else if (typeof object.ui64 === "object")
                    message.ui64 = new $util.LongBits(object.ui64.low >>> 0, object.ui64.high >>> 0).toNumber(true);
            if (object.si32 != null)
                message.si32 = object.si32 | 0;
            if (object.si64 != null)
                if ($util.Long)
                    (message.si64 = $util.Long.fromValue(object.si64)).unsigned = false;
                else if (typeof object.si64 === "string")
                    message.si64 = parseInt(object.si64, 10);
                else if (typeof object.si64 === "number")
                    message.si64 = object.si64;
                else if (typeof object.si64 === "object")
                    message.si64 = new $util.LongBits(object.si64.low >>> 0, object.si64.high >>> 0).toNumber();
            if (object.f32 != null)
                message.f32 = object.f32 >>> 0;
            if (object.f64 != null)
                if ($util.Long)
                    (message.f64 = $util.Long.fromValue(object.f64)).unsigned = false;
                else if (typeof object.f64 === "string")
                    message.f64 = parseInt(object.f64, 10);
                else if (typeof object.f64 === "number")
                    message.f64 = object.f64;
                else if (typeof object.f64 === "object")
                    message.f64 = new $util.LongBits(object.f64.low >>> 0, object.f64.high >>> 0).toNumber();
            if (object.sf32 != null)
                message.sf32 = object.sf32 | 0;
            if (object.sf64 != null)
                if ($util.Long)
                    (message.sf64 = $util.Long.fromValue(object.sf64)).unsigned = false;
                else if (typeof object.sf64 === "string")
                    message.sf64 = parseInt(object.sf64, 10);
                else if (typeof object.sf64 === "number")
                    message.sf64 = object.sf64;
                else if (typeof object.sf64 === "object")
                    message.sf64 = new $util.LongBits(object.sf64.low >>> 0, object.sf64.high >>> 0).toNumber();
            if (object.by != null)
                if (typeof object.by === "string")
                    $util.base64.decode(object.by, message.by = $util.newBuffer($util.base64.length(object.by)), 0);
                else if (object.by.length >= 0)
                    message.by = object.by;
            if (object.nested != null) {
                if (typeof object.nested !== "object")
                    throw TypeError(".foo.Foo.nested: object expected");
                message.nested = $root.foo.Foo.DeeperNested.fromObject(object.nested);
            }
            if (object.nested_array) {
                if (!Array.isArray(object.nested_array))
                    throw TypeError(".foo.Foo.nested_array: array expected");
                message.nested_array = [];
                for (var i = 0; i < object.nested_array.length; ++i) {
                    if (typeof object.nested_array[i] !== "object")
                        throw TypeError(".foo.Foo.nested_array: object expected");
                    message.nested_array[i] = $root.foo.Foo.DeeperNested.fromObject(object.nested_array[i]);
                }
            }
            if (object.nested_map) {
                if (typeof object.nested_map !== "object")
                    throw TypeError(".foo.Foo.nested_map: object expected");
                message.nested_map = {};
                for (var keys = Object.keys(object.nested_map), i = 0; i < keys.length; ++i) {
                    if (typeof object.nested_map[keys[i]] !== "object")
                        throw TypeError(".foo.Foo.nested_map: object expected");
                    message.nested_map[keys[i]] = $root.foo.Foo.DeeperNested.fromObject(object.nested_map[keys[i]]);
                }
            }
            if (object.map_string_int64) {
                if (typeof object.map_string_int64 !== "object")
                    throw TypeError(".foo.Foo.map_string_int64: object expected");
                message.map_string_int64 = {};
                for (var keys = Object.keys(object.map_string_int64), i = 0; i < keys.length; ++i)
                    if ($util.Long)
                        (message.map_string_int64[keys[i]] = $util.Long.fromValue(object.map_string_int64[keys[i]])).unsigned = false;
                    else if (typeof object.map_string_int64[keys[i]] === "string")
                        message.map_string_int64[keys[i]] = parseInt(object.map_string_int64[keys[i]], 10);
                    else if (typeof object.map_string_int64[keys[i]] === "number")
                        message.map_string_int64[keys[i]] = object.map_string_int64[keys[i]];
                    else if (typeof object.map_string_int64[keys[i]] === "object")
                        message.map_string_int64[keys[i]] = new $util.LongBits(object.map_string_int64[keys[i]].low >>> 0, object.map_string_int64[keys[i]].high >>> 0).toNumber();
            }
            if (object.map_int32_string) {
                if (typeof object.map_int32_string !== "object")
                    throw TypeError(".foo.Foo.map_int32_string: object expected");
                message.map_int32_string = {};
                for (var keys = Object.keys(object.map_int32_string), i = 0; i < keys.length; ++i)
                    message.map_int32_string[keys[i]] = String(object.map_int32_string[keys[i]]);
            }
            if (object.map_uint64_e) {
                if (typeof object.map_uint64_e !== "object")
                    throw TypeError(".foo.Foo.map_uint64_e: object expected");
                message.map_uint64_e = {};
                for (var keys = Object.keys(object.map_uint64_e), i = 0; i < keys.length; ++i)
                    switch (object.map_uint64_e[keys[i]]) {
                    default:
                        if (typeof object.map_uint64_e[keys[i]] === "number") {
                            message.map_uint64_e[keys[i]] = object.map_uint64_e[keys[i]];
                            break;
                        }
                        break;
                    case "E_UNKNOWN":
                    case 0:
                        message.map_uint64_e[keys[i]] = 0;
                        break;
                    case "E_KNOWN":
                    case 1:
                        message.map_uint64_e[keys[i]] = 1;
                        break;
                    }
            }
            if (object.string_array) {
                if (!Array.isArray(object.string_array))
                    throw TypeError(".foo.Foo.string_array: array expected");
                message.string_array = [];
                for (var i = 0; i < object.string_array.length; ++i)
                    message.string_array[i] = String(object.string_array[i]);
            }
            if (object.oneof_regular != null)
                message.oneof_regular = String(object.oneof_regular);
            if (object.oneof_nested != null) {
                if (typeof object.oneof_nested !== "object")
                    throw TypeError(".foo.Foo.oneof_nested: object expected");
                message.oneof_nested = $root.foo.Foo.DeeperNested.fromObject(object.oneof_nested);
            }
            switch (object.e) {
            default:
                if (typeof object.e === "number") {
                    message.e = object.e;
                    break;
                }
                break;
            case "E_UNKNOWN":
            case 0:
                message.e = 0;
                break;
            case "E_KNOWN":
            case 1:
                message.e = 1;
                break;
            }
            if (object.boo != null) {
                if (typeof object.boo !== "object")
                    throw TypeError(".foo.Foo.boo: object expected");
                message.boo = $root.bar.baz.boo.GetRequest.fromObject(object.boo);
            }
            return message;
        };

        /**
         * Creates a plain object from a Foo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foo.Foo
         * @static
         * @param {foo.Foo} message Foo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Foo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.nested_array = [];
                object.string_array = [];
            }
            if (options.objects || options.defaults) {
                object.nested_map = {};
                object.map_string_int64 = {};
                object.map_int32_string = {};
                object.map_uint64_e = {};
            }
            if (options.defaults) {
                object.s = "";
                object.b = false;
                object.i32 = 0;
                object.d = 0;
                object.f = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.i64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.i64 = options.longs === String ? "0" : 0;
                object.ui32 = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ui64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ui64 = options.longs === String ? "0" : 0;
                object.si32 = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.si64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.si64 = options.longs === String ? "0" : 0;
                object.f32 = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.f64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.f64 = options.longs === String ? "0" : 0;
                object.sf32 = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sf64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sf64 = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.by = "";
                else {
                    object.by = [];
                    if (options.bytes !== Array)
                        object.by = $util.newBuffer(object.by);
                }
                object.nested = null;
                object.e = options.enums === String ? "E_UNKNOWN" : 0;
                object.boo = null;
            }
            if (message.s != null && message.hasOwnProperty("s"))
                object.s = message.s;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            if (message.i32 != null && message.hasOwnProperty("i32"))
                object.i32 = message.i32;
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = options.json && !isFinite(message.d) ? String(message.d) : message.d;
            if (message.f != null && message.hasOwnProperty("f"))
                object.f = options.json && !isFinite(message.f) ? String(message.f) : message.f;
            if (message.i64 != null && message.hasOwnProperty("i64"))
                if (typeof message.i64 === "number")
                    object.i64 = options.longs === String ? String(message.i64) : message.i64;
                else
                    object.i64 = options.longs === String ? $util.Long.prototype.toString.call(message.i64) : options.longs === Number ? new $util.LongBits(message.i64.low >>> 0, message.i64.high >>> 0).toNumber() : message.i64;
            if (message.ui32 != null && message.hasOwnProperty("ui32"))
                object.ui32 = message.ui32;
            if (message.ui64 != null && message.hasOwnProperty("ui64"))
                if (typeof message.ui64 === "number")
                    object.ui64 = options.longs === String ? String(message.ui64) : message.ui64;
                else
                    object.ui64 = options.longs === String ? $util.Long.prototype.toString.call(message.ui64) : options.longs === Number ? new $util.LongBits(message.ui64.low >>> 0, message.ui64.high >>> 0).toNumber(true) : message.ui64;
            if (message.si32 != null && message.hasOwnProperty("si32"))
                object.si32 = message.si32;
            if (message.si64 != null && message.hasOwnProperty("si64"))
                if (typeof message.si64 === "number")
                    object.si64 = options.longs === String ? String(message.si64) : message.si64;
                else
                    object.si64 = options.longs === String ? $util.Long.prototype.toString.call(message.si64) : options.longs === Number ? new $util.LongBits(message.si64.low >>> 0, message.si64.high >>> 0).toNumber() : message.si64;
            if (message.f32 != null && message.hasOwnProperty("f32"))
                object.f32 = message.f32;
            if (message.f64 != null && message.hasOwnProperty("f64"))
                if (typeof message.f64 === "number")
                    object.f64 = options.longs === String ? String(message.f64) : message.f64;
                else
                    object.f64 = options.longs === String ? $util.Long.prototype.toString.call(message.f64) : options.longs === Number ? new $util.LongBits(message.f64.low >>> 0, message.f64.high >>> 0).toNumber() : message.f64;
            if (message.sf32 != null && message.hasOwnProperty("sf32"))
                object.sf32 = message.sf32;
            if (message.sf64 != null && message.hasOwnProperty("sf64"))
                if (typeof message.sf64 === "number")
                    object.sf64 = options.longs === String ? String(message.sf64) : message.sf64;
                else
                    object.sf64 = options.longs === String ? $util.Long.prototype.toString.call(message.sf64) : options.longs === Number ? new $util.LongBits(message.sf64.low >>> 0, message.sf64.high >>> 0).toNumber() : message.sf64;
            if (message.by != null && message.hasOwnProperty("by"))
                object.by = options.bytes === String ? $util.base64.encode(message.by, 0, message.by.length) : options.bytes === Array ? Array.prototype.slice.call(message.by) : message.by;
            if (message.nested != null && message.hasOwnProperty("nested"))
                object.nested = $root.foo.Foo.DeeperNested.toObject(message.nested, options);
            if (message.nested_array && message.nested_array.length) {
                object.nested_array = [];
                for (var j = 0; j < message.nested_array.length; ++j)
                    object.nested_array[j] = $root.foo.Foo.DeeperNested.toObject(message.nested_array[j], options);
            }
            var keys2;
            if (message.nested_map && (keys2 = Object.keys(message.nested_map)).length) {
                object.nested_map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.nested_map[keys2[j]] = $root.foo.Foo.DeeperNested.toObject(message.nested_map[keys2[j]], options);
            }
            if (message.map_string_int64 && (keys2 = Object.keys(message.map_string_int64)).length) {
                object.map_string_int64 = {};
                for (var j = 0; j < keys2.length; ++j)
                    if (typeof message.map_string_int64[keys2[j]] === "number")
                        object.map_string_int64[keys2[j]] = options.longs === String ? String(message.map_string_int64[keys2[j]]) : message.map_string_int64[keys2[j]];
                    else
                        object.map_string_int64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.map_string_int64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.map_string_int64[keys2[j]].low >>> 0, message.map_string_int64[keys2[j]].high >>> 0).toNumber() : message.map_string_int64[keys2[j]];
            }
            if (message.map_int32_string && (keys2 = Object.keys(message.map_int32_string)).length) {
                object.map_int32_string = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.map_int32_string[keys2[j]] = message.map_int32_string[keys2[j]];
            }
            if (message.string_array && message.string_array.length) {
                object.string_array = [];
                for (var j = 0; j < message.string_array.length; ++j)
                    object.string_array[j] = message.string_array[j];
            }
            if (message.oneof_regular != null && message.hasOwnProperty("oneof_regular")) {
                object.oneof_regular = message.oneof_regular;
                if (options.oneofs)
                    object.nested_oneof = "oneof_regular";
            }
            if (message.oneof_nested != null && message.hasOwnProperty("oneof_nested")) {
                object.oneof_nested = $root.foo.Foo.DeeperNested.toObject(message.oneof_nested, options);
                if (options.oneofs)
                    object.nested_oneof = "oneof_nested";
            }
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.enums === String ? $root.foo.E[message.e] === undefined ? message.e : $root.foo.E[message.e] : message.e;
            if (message.map_uint64_e && (keys2 = Object.keys(message.map_uint64_e)).length) {
                object.map_uint64_e = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.map_uint64_e[keys2[j]] = options.enums === String ? $root.foo.E[message.map_uint64_e[keys2[j]]] === undefined ? message.map_uint64_e[keys2[j]] : $root.foo.E[message.map_uint64_e[keys2[j]]] : message.map_uint64_e[keys2[j]];
            }
            if (message.boo != null && message.hasOwnProperty("boo"))
                object.boo = $root.bar.baz.boo.GetRequest.toObject(message.boo, options);
            return object;
        };

        /**
         * Converts this Foo to JSON.
         * @function toJSON
         * @memberof foo.Foo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Foo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Foo
         * @function getTypeUrl
         * @memberof foo.Foo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Foo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/foo.Foo";
        };

        Foo.DeeperNested = (function() {

            /**
             * Properties of a DeeperNested.
             * @memberof foo.Foo
             * @interface IDeeperNested
             * @property {string|null} [s] DeeperNested s
             * @property {foo.Foo.DeeperNested.INested|null} [deeper] DeeperNested deeper
             */

            /**
             * Constructs a new DeeperNested.
             * @memberof foo.Foo
             * @classdesc Represents a DeeperNested.
             * @implements IDeeperNested
             * @constructor
             * @param {foo.Foo.IDeeperNested=} [properties] Properties to set
             */
            function DeeperNested(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeeperNested s.
             * @member {string} s
             * @memberof foo.Foo.DeeperNested
             * @instance
             */
            DeeperNested.prototype.s = "";

            /**
             * DeeperNested deeper.
             * @member {foo.Foo.DeeperNested.INested|null|undefined} deeper
             * @memberof foo.Foo.DeeperNested
             * @instance
             */
            DeeperNested.prototype.deeper = null;

            /**
             * Creates a new DeeperNested instance using the specified properties.
             * @function create
             * @memberof foo.Foo.DeeperNested
             * @static
             * @param {foo.Foo.IDeeperNested=} [properties] Properties to set
             * @returns {foo.Foo.DeeperNested} DeeperNested instance
             */
            DeeperNested.create = function create(properties) {
                return new DeeperNested(properties);
            };

            /**
             * Encodes the specified DeeperNested message. Does not implicitly {@link foo.Foo.DeeperNested.verify|verify} messages.
             * @function encode
             * @memberof foo.Foo.DeeperNested
             * @static
             * @param {foo.Foo.IDeeperNested} message DeeperNested message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeeperNested.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.s != null && Object.hasOwnProperty.call(message, "s"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.s);
                if (message.deeper != null && Object.hasOwnProperty.call(message, "deeper"))
                    $root.foo.Foo.DeeperNested.Nested.encode(message.deeper, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DeeperNested message, length delimited. Does not implicitly {@link foo.Foo.DeeperNested.verify|verify} messages.
             * @function encodeDelimited
             * @memberof foo.Foo.DeeperNested
             * @static
             * @param {foo.Foo.IDeeperNested} message DeeperNested message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeeperNested.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeeperNested message from the specified reader or buffer.
             * @function decode
             * @memberof foo.Foo.DeeperNested
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {foo.Foo.DeeperNested} DeeperNested
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeeperNested.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foo.Foo.DeeperNested();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.s = reader.string();
                            break;
                        }
                    case 2: {
                            message.deeper = $root.foo.Foo.DeeperNested.Nested.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeeperNested message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof foo.Foo.DeeperNested
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {foo.Foo.DeeperNested} DeeperNested
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeeperNested.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeeperNested message.
             * @function verify
             * @memberof foo.Foo.DeeperNested
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeeperNested.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.s != null && message.hasOwnProperty("s"))
                    if (!$util.isString(message.s))
                        return "s: string expected";
                if (message.deeper != null && message.hasOwnProperty("deeper")) {
                    var error = $root.foo.Foo.DeeperNested.Nested.verify(message.deeper);
                    if (error)
                        return "deeper." + error;
                }
                return null;
            };

            /**
             * Creates a DeeperNested message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof foo.Foo.DeeperNested
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {foo.Foo.DeeperNested} DeeperNested
             */
            DeeperNested.fromObject = function fromObject(object) {
                if (object instanceof $root.foo.Foo.DeeperNested)
                    return object;
                var message = new $root.foo.Foo.DeeperNested();
                if (object.s != null)
                    message.s = String(object.s);
                if (object.deeper != null) {
                    if (typeof object.deeper !== "object")
                        throw TypeError(".foo.Foo.DeeperNested.deeper: object expected");
                    message.deeper = $root.foo.Foo.DeeperNested.Nested.fromObject(object.deeper);
                }
                return message;
            };

            /**
             * Creates a plain object from a DeeperNested message. Also converts values to other types if specified.
             * @function toObject
             * @memberof foo.Foo.DeeperNested
             * @static
             * @param {foo.Foo.DeeperNested} message DeeperNested
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeeperNested.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.s = "";
                    object.deeper = null;
                }
                if (message.s != null && message.hasOwnProperty("s"))
                    object.s = message.s;
                if (message.deeper != null && message.hasOwnProperty("deeper"))
                    object.deeper = $root.foo.Foo.DeeperNested.Nested.toObject(message.deeper, options);
                return object;
            };

            /**
             * Converts this DeeperNested to JSON.
             * @function toJSON
             * @memberof foo.Foo.DeeperNested
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeeperNested.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DeeperNested
             * @function getTypeUrl
             * @memberof foo.Foo.DeeperNested
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DeeperNested.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/foo.Foo.DeeperNested";
            };

            DeeperNested.Nested = (function() {

                /**
                 * Properties of a Nested.
                 * @memberof foo.Foo.DeeperNested
                 * @interface INested
                 * @property {string|null} [s] Nested s
                 */

                /**
                 * Constructs a new Nested.
                 * @memberof foo.Foo.DeeperNested
                 * @classdesc Represents a Nested.
                 * @implements INested
                 * @constructor
                 * @param {foo.Foo.DeeperNested.INested=} [properties] Properties to set
                 */
                function Nested(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Nested s.
                 * @member {string} s
                 * @memberof foo.Foo.DeeperNested.Nested
                 * @instance
                 */
                Nested.prototype.s = "";

                /**
                 * Creates a new Nested instance using the specified properties.
                 * @function create
                 * @memberof foo.Foo.DeeperNested.Nested
                 * @static
                 * @param {foo.Foo.DeeperNested.INested=} [properties] Properties to set
                 * @returns {foo.Foo.DeeperNested.Nested} Nested instance
                 */
                Nested.create = function create(properties) {
                    return new Nested(properties);
                };

                /**
                 * Encodes the specified Nested message. Does not implicitly {@link foo.Foo.DeeperNested.Nested.verify|verify} messages.
                 * @function encode
                 * @memberof foo.Foo.DeeperNested.Nested
                 * @static
                 * @param {foo.Foo.DeeperNested.INested} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.s != null && Object.hasOwnProperty.call(message, "s"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.s);
                    return writer;
                };

                /**
                 * Encodes the specified Nested message, length delimited. Does not implicitly {@link foo.Foo.DeeperNested.Nested.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof foo.Foo.DeeperNested.Nested
                 * @static
                 * @param {foo.Foo.DeeperNested.INested} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer.
                 * @function decode
                 * @memberof foo.Foo.DeeperNested.Nested
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {foo.Foo.DeeperNested.Nested} Nested
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Nested.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foo.Foo.DeeperNested.Nested();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.s = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof foo.Foo.DeeperNested.Nested
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {foo.Foo.DeeperNested.Nested} Nested
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Nested.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Nested message.
                 * @function verify
                 * @memberof foo.Foo.DeeperNested.Nested
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Nested.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.s != null && message.hasOwnProperty("s"))
                        if (!$util.isString(message.s))
                            return "s: string expected";
                    return null;
                };

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof foo.Foo.DeeperNested.Nested
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {foo.Foo.DeeperNested.Nested} Nested
                 */
                Nested.fromObject = function fromObject(object) {
                    if (object instanceof $root.foo.Foo.DeeperNested.Nested)
                        return object;
                    var message = new $root.foo.Foo.DeeperNested.Nested();
                    if (object.s != null)
                        message.s = String(object.s);
                    return message;
                };

                /**
                 * Creates a plain object from a Nested message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof foo.Foo.DeeperNested.Nested
                 * @static
                 * @param {foo.Foo.DeeperNested.Nested} message Nested
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Nested.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.s = "";
                    if (message.s != null && message.hasOwnProperty("s"))
                        object.s = message.s;
                    return object;
                };

                /**
                 * Converts this Nested to JSON.
                 * @function toJSON
                 * @memberof foo.Foo.DeeperNested.Nested
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Nested.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Nested
                 * @function getTypeUrl
                 * @memberof foo.Foo.DeeperNested.Nested
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Nested.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/foo.Foo.DeeperNested.Nested";
                };

                return Nested;
            })();

            return DeeperNested;
        })();

        return Foo;
    })();

    /**
     * E enum.
     * @name foo.E
     * @enum {number}
     * @property {number} E_UNKNOWN=0 E_UNKNOWN value
     * @property {number} E_KNOWN=1 E_KNOWN value
     */
    foo.E = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "E_UNKNOWN"] = 0;
        values[valuesById[1] = "E_KNOWN"] = 1;
        return values;
    })();

    return foo;
})();

$root.RootMessage = (function() {

    /**
     * Properties of a RootMessage.
     * @exports IRootMessage
     * @interface IRootMessage
     */

    /**
     * Constructs a new RootMessage.
     * @exports RootMessage
     * @classdesc Represents a RootMessage.
     * @implements IRootMessage
     * @constructor
     * @param {IRootMessage=} [properties] Properties to set
     */
    function RootMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new RootMessage instance using the specified properties.
     * @function create
     * @memberof RootMessage
     * @static
     * @param {IRootMessage=} [properties] Properties to set
     * @returns {RootMessage} RootMessage instance
     */
    RootMessage.create = function create(properties) {
        return new RootMessage(properties);
    };

    /**
     * Encodes the specified RootMessage message. Does not implicitly {@link RootMessage.verify|verify} messages.
     * @function encode
     * @memberof RootMessage
     * @static
     * @param {IRootMessage} message RootMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RootMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified RootMessage message, length delimited. Does not implicitly {@link RootMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RootMessage
     * @static
     * @param {IRootMessage} message RootMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RootMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RootMessage message from the specified reader or buffer.
     * @function decode
     * @memberof RootMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RootMessage} RootMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RootMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RootMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RootMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RootMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RootMessage} RootMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RootMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RootMessage message.
     * @function verify
     * @memberof RootMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RootMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a RootMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RootMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RootMessage} RootMessage
     */
    RootMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.RootMessage)
            return object;
        return new $root.RootMessage();
    };

    /**
     * Creates a plain object from a RootMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RootMessage
     * @static
     * @param {RootMessage} message RootMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RootMessage.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this RootMessage to JSON.
     * @function toJSON
     * @memberof RootMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RootMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RootMessage
     * @function getTypeUrl
     * @memberof RootMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RootMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RootMessage";
    };

    return RootMessage;
})();

/**
 * RootEnum enum.
 * @exports RootEnum
 * @enum {number}
 * @property {number} ROOT_ENUM_UNKNOWN=0 ROOT_ENUM_UNKNOWN value
 * @property {number} ROOT_ENUM_KNOWN=1 ROOT_ENUM_KNOWN value
 */
$root.RootEnum = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ROOT_ENUM_UNKNOWN"] = 0;
    values[valuesById[1] = "ROOT_ENUM_KNOWN"] = 1;
    return values;
})();

module.exports = $root;
