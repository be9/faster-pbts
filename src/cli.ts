import minimist from 'minimist';
import winston from 'winston';
import fs from 'node:fs';
import { main } from './index';

const argv = minimist<{
  single: boolean;
  verbose: boolean;
  indent: string;
  output: string;
  'import-long': boolean;
  help: boolean;
}>(process.argv.slice(2), {
  boolean: ['single', 'verbose', 'import-long', 'help'],
  string: ['output', 'indent'],
  default: { indent: '4', 'import-long': true },
  alias: {
    s: 'single',
    v: 'verbose',
    o: 'output',
    h: 'help',
  },
});

const USAGE = `
faster-pbts generates TypeScript definitions from annotated JavaScript files.

Usage: faster-pbts [options] INPUT-FILE-JS

Options:
  -h, --help      Show help

  --indent N          Use N spaces for indentation (default: 4).
  --[no-]import-long  Add the Long import to the generated typings file (default: true).    
  -o, --output        Saves to a file instead of writing to stdout.
`;

if (argv.help) {
  console.log(USAGE);
  process.exit(0);
}

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
  console.log(USAGE);
  console.error('input file not specified');
  process.exit(1);
}

main(logger, input, output, argv.single, parseInt(argv.indent), argv['import-long']).catch((e) => {
  logger.error(e);
  process.exit(1);
});
