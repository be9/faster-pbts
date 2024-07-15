import minimist from 'minimist';
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

if (require.main === module) {
  const argv = minimist<{
    single: boolean;
    verbose: boolean;
    indent: string;
    output: string;
    'import-long': boolean;
  }>(process.argv.slice(2), {
    boolean: ['single', 'verbose', 'import-long'],
    string: ['output', 'indent'],
    default: { indent: '4', 'import-long': true },
    alias: {
      s: 'single',
      v: 'verbose',
      o: 'output',
    },
  });

  const logger = winston.createLogger({
    levels: winston.config.syslog.levels,
    level: argv.verbose ? 'debug' : 'info',
    format: winston.format.cli(),
    transports: [
      new winston.transports.Console({
        stderrLevels: ['error', 'debug', 'info'],
      }),
    ],
  });

  const output = fs.createWriteStream(argv.output ?? '/dev/stdout');

  const input = argv._[0];
  if (input == null) {
    throw Error('input not specified');
  }

  main(logger, input, output, argv.single, parseInt(argv.indent), argv['import-long']).catch((e) => {
    logger.error(e);
    process.exit(1);
  });
}
