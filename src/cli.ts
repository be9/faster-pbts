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
