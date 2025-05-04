import fs from 'node:fs/promises';
import path from 'node:path';
import { colors } from '../../utils/colors.js';

export const mkdir = async (args, state) => {
  if (args.length === 0) {
    throw new Error('Invalid arguments!');
  }

  const dirName = args.join(' ');
  const dirPath = path.resolve(state.currentDir, dirName);

  try {
    await fs.mkdir(dirPath);
    console.log(colors.green(`Directory ${dirName} is successfully created!`));
  } catch {
    throw new Error(`Directory ${dirName} already exists!`);
  }
};
