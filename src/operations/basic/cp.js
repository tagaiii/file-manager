import fsPromises from 'node:fs/promises';
import fs from 'node:fs';
import path from 'node:path';
import { colors } from '../../utils/colors.js';
import { pipeline } from 'node:stream/promises';

export const cp = async (args, state, withMessage = true) => {
  if (args.length === 0) {
    throw new Error('Invalid arguments!');
  }

  const srcFilePath = path.resolve(state.currentDir, args[0]);
  const destFilePath = path.resolve(state.currentDir, args[1], args[0]);

  try {
    await fsPromises.mkdir(path.dirname(destFilePath), { recursive: true });

    await pipeline(
      fs.createReadStream(srcFilePath, 'utf-8'),
      fs.createWriteStream(destFilePath, {
        encoding: 'utf-8',
        flags: 'wx',
      })
    );

    if (withMessage) {
      console.log(
        colors.green(
          `File ${args[0]} is successfully copied into ${path.dirname(
            destFilePath
          )}`
        )
      );
    }
  } catch {
    throw new Error('Error occured during copying operation!');
  }
};
