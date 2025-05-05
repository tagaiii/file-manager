import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { colors } from '../../utils/colors.js';

export const hash = async (args, state) => {
  if (args.length === 0) {
    throw new Error('Invalid arguments');
  }

  const filePath = path.resolve(state.currentDir, args.join(' '));
  const readableStream = fs.createReadStream(filePath, 'utf-8');
  const hash = createHash('sha256');

  await pipeline(readableStream, hash);

  console.log(
    colors.green(
      `Hash for ${path.basename(filePath)} is: ${hash.digest('hex')}`
    )
  );
};
