import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace bar {

    namespace baz {

        namespace boo {

            class Boo extends $protobuf.rpc.Service {
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Boo;
                public get(request: bar.baz.boo.IGetRequest, callback: bar.baz.boo.Boo.GetCallback): void;
                public get(request: bar.baz.boo.IGetRequest): Promise<bar.baz.boo.GetResponse>;
                public set(request: bar.baz.boo.ISetRequest, callback: bar.baz.boo.Boo.SetCallback): void;
                public set(request: bar.baz.boo.ISetRequest): Promise<bar.baz.boo.SetResponse>;
            }

            namespace Boo {

                type GetCallback = (error: (Error|null), response?: bar.baz.boo.GetResponse) => void;

                type SetCallback = (error: (Error|null), response?: bar.baz.boo.SetResponse) => void;
            }

            interface IGetRequest {
            }

            class GetRequest implements IGetRequest {
                constructor(properties?: bar.baz.boo.IGetRequest);
                public static create(properties?: bar.baz.boo.IGetRequest): bar.baz.boo.GetRequest;
                public static encode(message: bar.baz.boo.IGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: bar.baz.boo.IGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bar.baz.boo.GetRequest;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bar.baz.boo.GetRequest;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): bar.baz.boo.GetRequest;
                public static toObject(message: bar.baz.boo.GetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IGetResponse {
            }

            class GetResponse implements IGetResponse {
                constructor(properties?: bar.baz.boo.IGetResponse);
                public static create(properties?: bar.baz.boo.IGetResponse): bar.baz.boo.GetResponse;
                public static encode(message: bar.baz.boo.IGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: bar.baz.boo.IGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bar.baz.boo.GetResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bar.baz.boo.GetResponse;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): bar.baz.boo.GetResponse;
                public static toObject(message: bar.baz.boo.GetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface ISetRequest {
            }

            class SetRequest implements ISetRequest {
                constructor(properties?: bar.baz.boo.ISetRequest);
                public static create(properties?: bar.baz.boo.ISetRequest): bar.baz.boo.SetRequest;
                public static encode(message: bar.baz.boo.ISetRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: bar.baz.boo.ISetRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bar.baz.boo.SetRequest;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bar.baz.boo.SetRequest;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): bar.baz.boo.SetRequest;
                public static toObject(message: bar.baz.boo.SetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface ISetResponse {
            }

            class SetResponse implements ISetResponse {
                constructor(properties?: bar.baz.boo.ISetResponse);
                public static create(properties?: bar.baz.boo.ISetResponse): bar.baz.boo.SetResponse;
                public static encode(message: bar.baz.boo.ISetResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: bar.baz.boo.ISetResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bar.baz.boo.SetResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bar.baz.boo.SetResponse;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): bar.baz.boo.SetResponse;
                public static toObject(message: bar.baz.boo.SetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IMoo {
            }

            class Moo implements IMoo {
                constructor(properties?: bar.baz.boo.IMoo);
                public static create(properties?: bar.baz.boo.IMoo): bar.baz.boo.Moo;
                public static encode(message: bar.baz.boo.IMoo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: bar.baz.boo.IMoo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bar.baz.boo.Moo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bar.baz.boo.Moo;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): bar.baz.boo.Moo;
                public static toObject(message: bar.baz.boo.Moo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Moo {

                interface ICoo {
                }

                class Coo implements ICoo {
                    constructor(properties?: bar.baz.boo.Moo.ICoo);
                    public static create(properties?: bar.baz.boo.Moo.ICoo): bar.baz.boo.Moo.Coo;
                    public static encode(message: bar.baz.boo.Moo.ICoo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: bar.baz.boo.Moo.ICoo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bar.baz.boo.Moo.Coo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bar.baz.boo.Moo.Coo;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): bar.baz.boo.Moo.Coo;
                    public static toObject(message: bar.baz.boo.Moo.Coo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Coo {

                    interface IDoo {
                        field?: (bar.baz.boo.Moo.Coo.Doo.VeryDeep|null);
                    }

                    class Doo implements IDoo {
                        constructor(properties?: bar.baz.boo.Moo.Coo.IDoo);
                        public field: bar.baz.boo.Moo.Coo.Doo.VeryDeep;
                        public static create(properties?: bar.baz.boo.Moo.Coo.IDoo): bar.baz.boo.Moo.Coo.Doo;
                        public static encode(message: bar.baz.boo.Moo.Coo.IDoo, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static encodeDelimited(message: bar.baz.boo.Moo.Coo.IDoo, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bar.baz.boo.Moo.Coo.Doo;
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bar.baz.boo.Moo.Coo.Doo;
                        public static verify(message: { [k: string]: any }): (string|null);
                        public static fromObject(object: { [k: string]: any }): bar.baz.boo.Moo.Coo.Doo;
                        public static toObject(message: bar.baz.boo.Moo.Coo.Doo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                        public toJSON(): { [k: string]: any };
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Doo {

                        enum VeryDeep {
                            VERY_DEEP_UNKNOWN = 0,
                            VERY_DEEP_KNOWN = 1
                        }
                    }

                    enum LessDeeper {
                        LESS_DEEPER_UNKNOWN = 0,
                        LESS_DEEPER_KNOWN = 1
                    }
                }

                interface IGoo {
                }

                class Goo implements IGoo {
                    constructor(properties?: bar.baz.boo.Moo.IGoo);
                    public static create(properties?: bar.baz.boo.Moo.IGoo): bar.baz.boo.Moo.Goo;
                    public static encode(message: bar.baz.boo.Moo.IGoo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: bar.baz.boo.Moo.IGoo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bar.baz.boo.Moo.Goo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bar.baz.boo.Moo.Goo;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): bar.baz.boo.Moo.Goo;
                    public static toObject(message: bar.baz.boo.Moo.Goo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            enum DeepEnum {
                DEEP_ENUM_UNKNOWN = 0,
                DEEP_ENUM_KNOWN = 1
            }
        }
    }
}

export namespace foo {

    interface IFoo {
        s?: (string|null);
        b?: (boolean|null);
        i32?: (number|null);
        d?: (number|null);
        f?: (number|null);
        i64?: (number|Long|null);
        ui32?: (number|null);
        ui64?: (number|Long|null);
        si32?: (number|null);
        si64?: (number|Long|null);
        f32?: (number|null);
        f64?: (number|Long|null);
        sf32?: (number|null);
        sf64?: (number|Long|null);
        by?: (Uint8Array|null);
        nested?: (foo.Foo.IDeeperNested|null);
        nested_array?: (foo.Foo.IDeeperNested[]|null);
        nested_map?: ({ [k: string]: foo.Foo.IDeeperNested }|null);
        map_string_int64?: ({ [k: string]: (number|Long) }|null);
        map_int32_string?: ({ [k: string]: string }|null);
        map_uint64_e?: ({ [k: string]: foo.E }|null);
        string_array?: (string[]|null);
        oneof_regular?: (string|null);
        oneof_nested?: (foo.Foo.IDeeperNested|null);
        e?: (foo.E|null);
        boo?: (bar.baz.boo.IGetRequest|null);
    }

    class Foo implements IFoo {
        constructor(properties?: foo.IFoo);
        public s: string;
        public b: boolean;
        public i32: number;
        public d: number;
        public f: number;
        public i64: (number|Long);
        public ui32: number;
        public ui64: (number|Long);
        public si32: number;
        public si64: (number|Long);
        public f32: number;
        public f64: (number|Long);
        public sf32: number;
        public sf64: (number|Long);
        public by: Uint8Array;
        public nested?: (foo.Foo.IDeeperNested|null);
        public nested_array: foo.Foo.IDeeperNested[];
        public nested_map: { [k: string]: foo.Foo.IDeeperNested };
        public map_string_int64: { [k: string]: (number|Long) };
        public map_int32_string: { [k: string]: string };
        public map_uint64_e: { [k: string]: foo.E };
        public string_array: string[];
        public oneof_regular?: (string|null);
        public oneof_nested?: (foo.Foo.IDeeperNested|null);
        public e: foo.E;
        public boo?: (bar.baz.boo.IGetRequest|null);
        public nested_oneof?: ("oneof_regular"|"oneof_nested");
        public static create(properties?: foo.IFoo): foo.Foo;
        public static encode(message: foo.IFoo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foo.IFoo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foo.Foo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foo.Foo;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foo.Foo;
        public static toObject(message: foo.Foo, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Foo {

        interface IDeeperNested {
            s?: (string|null);
            deeper?: (foo.Foo.DeeperNested.INested|null);
        }

        class DeeperNested implements IDeeperNested {
            constructor(properties?: foo.Foo.IDeeperNested);
            public s: string;
            public deeper?: (foo.Foo.DeeperNested.INested|null);
            public static create(properties?: foo.Foo.IDeeperNested): foo.Foo.DeeperNested;
            public static encode(message: foo.Foo.IDeeperNested, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: foo.Foo.IDeeperNested, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foo.Foo.DeeperNested;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foo.Foo.DeeperNested;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): foo.Foo.DeeperNested;
            public static toObject(message: foo.Foo.DeeperNested, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DeeperNested {

            interface INested {
                s?: (string|null);
            }

            class Nested implements INested {
                constructor(properties?: foo.Foo.DeeperNested.INested);
                public s: string;
                public static create(properties?: foo.Foo.DeeperNested.INested): foo.Foo.DeeperNested.Nested;
                public static encode(message: foo.Foo.DeeperNested.INested, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: foo.Foo.DeeperNested.INested, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foo.Foo.DeeperNested.Nested;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foo.Foo.DeeperNested.Nested;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): foo.Foo.DeeperNested.Nested;
                public static toObject(message: foo.Foo.DeeperNested.Nested, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    enum E {
        E_UNKNOWN = 0,
        E_KNOWN = 1
    }
}

export interface IRootMessage {
}

export class RootMessage implements IRootMessage {
    constructor(properties?: IRootMessage);
    public static create(properties?: IRootMessage): RootMessage;
    public static encode(message: IRootMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IRootMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RootMessage;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RootMessage;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): RootMessage;
    public static toObject(message: RootMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export enum RootEnum {
    ROOT_ENUM_UNKNOWN = 0,
    ROOT_ENUM_KNOWN = 1
}
