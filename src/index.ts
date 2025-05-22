import fs from 'node:fs';
import winston from 'winston';

import { processChunks } from './chunks';
import { ProtoJsParser } from './parse';
import { generateTypings } from './generate';
import stream from 'node:stream';

export async function main(
  logger: winston.Logger,
  input: string,
  output: stream.Writable,
  single: boolean,
  indent = 4,
  importLong = true,
) {
  const parser = new ProtoJsParser(logger);
  const iterableParser = single
    ? parser.parseChunk(fs.readFileSync(input, { encoding: 'utf-8' }))
    : processChunks(logger, input, parser.parseChunk.bind(parser));

  output.write(`import * as $protobuf from "protobufjs";`);

  if (importLong) {
    output.write(`\nimport Long = require("long");`);
  }

  await generateTypings(logger, iterableParser, output, indent);

  output.end();
}
