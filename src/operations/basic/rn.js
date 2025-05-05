import fs from 'node:fs/promises';
import path from 'node:path';
import { colors } from '../../utils/colors.js';

export const rn = async (args, state) => {
  if (args.length !== 2) {
    throw new Error('Invalid arguments!');
  }

  const srcFilePath = path.resolve(state.currentDir, args[0]);
  const newFilePath = path.resolve(path.dirname(srcFilePath), args[1]);

  await fs.access(srcFilePath);
  try {
    await fs.access(newFilePath);
    throw new Error('File already exists!');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    await fs.rename(srcFilePath, newFilePath);
    console.log(colors.green(`File ${args[0]} is renamed to ${args[1]}`));
  }
};
