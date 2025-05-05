import fs from 'node:fs/promises';
import path from 'node:path';
import { colors } from '../../utils/colors.js';

export const mkdir = async (args, state) => {
  if (args.length !== 1) {
    throw new Error('Invalid arguments!');
  }

  const dirName = args[0];
  const dirPath = path.resolve(state.currentDir, dirName);

  await fs.mkdir(dirPath);
  console.log(colors.green(`Directory ${dirName} is successfully created!`));
};
