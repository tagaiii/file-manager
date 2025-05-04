import fs from 'node:fs/promises';
import path from 'node:path';
import { colors } from '../../utils/colors.js';

export const cp = async (args, state) => {
  if (args.length === 0) {
    throw new Error('Invalid arguments!');
  }

  const srcFilePath = path.resolve(state.currentDir, args[0]);
  const destFilePath = path.resolve(state.currentDir, args[1], args[0]);

  try {
    await fs.cp(srcFilePath, destFilePath, {
      force: false,
      errorOnExist: true,
    });
    console.log(
      colors.green(
        `File ${args[0]} is successfully copied into ${path.dirname(
          destFilePath
        )}`
      )
    );
  } catch {
    throw new Error('Error occured during copying operation!');
  }
};
