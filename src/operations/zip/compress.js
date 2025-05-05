import zlib from 'node:zlib';
import path from 'node:path';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { colors } from '../../utils/colors.js';

export const compress = async (args, state) => {
  if (args.length !== 2) {
    throw new Error('Invalid arguments!');
  }
  const fileName = path.basename(args[0], path.extname(args[0]));
  const srcPath = path.resolve(state.currentDir, args[0]);
  const destPath = path.resolve(state.currentDir, args[1], `${fileName}.br`);

  const zip = zlib.createBrotliCompress();

  await pipeline(
    fs.createReadStream(srcPath),
    zip,
    fs.createWriteStream(destPath, { flags: 'wx' })
  );

  console.log(
    colors.green(`File ${path.basename(srcPath)} is compressed to ${destPath}`)
  );
};
