import fs from 'node:fs';
import readline from 'node:readline';
import { Logger } from 'winston';

import { ParsedComment } from './parse';

/**
 * This generator function splits the file into chunks denoted by
 * `$root.something = ...` and yields them to the caller.
 */
export async function* processChunks(
  logger: Logger,
  filePath: string,
  fn: (chunk: string) => Generator<ParsedComment, void>,
): AsyncGenerator<ParsedComment> {
  const lineRegex = /^\$root\.(\w+) =/;

  for await (const chunk of splitFile(filePath, lineRegex)) {
    const m = chunk.match(lineRegex);
    if (m == null) {
      // Skip the first part; we're not interested in it.
      continue;
    }

    logger.info(`Processing top-level chunk "${m[1]}"`);
    for (const item of fn(chunk)) {
      yield item;
    }
  }
}

/** The generator function that splits the file by given regexp. */
async function* splitFile(filePath: string, lineRegex: RegExp) {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let chunk = '';
  for await (const line of rl) {
    if (line.match(lineRegex)) {
      if (chunk !== '') {
        yield chunk;
        chunk = '';
      }
    }
    chunk += line + '\n';
  }

  if (chunk !== '') {
    yield chunk;
  }
}
