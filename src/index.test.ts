import assert from 'node:assert/strict';
import { join } from 'node:path';
import { before, after, describe, it } from 'node:test';

import { main } from './index';
import { testLogger } from './test-helpers';

import fsP from 'node:fs/promises';
import fs from 'node:fs';

void describe('integration tests', () => {
  let tmpDir: string;

  before(async () => {
    tmpDir = await fsP.mkdtemp('faster-pbts');
  });

  after(async () => {
    await fsP.rm(tmpDir, { recursive: true, force: true });
  });

  void it('protobuf 7.3.2', async () => {
    const dir = join(__dirname, '..', 'fixtures', 'protobuf-7.3.2');

    const outPath = join(tmpDir, 'fixtures.7.3.2.d.ts');
    const out = fs.createWriteStream(outPath);

    await main(testLogger(), join(dir, 'fixtures.js'), out, false, 4);
    const resultP = fsP.readFile(outPath, { encoding: 'utf-8' });
    const expectedP = fsP.readFile(join(dir, 'fixtures.d.ts'), { encoding: 'utf-8' });

    assert.equal(await resultP, await expectedP);
  });
});
