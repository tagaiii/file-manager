import fs from 'node:fs/promises';
import path from 'node:path';
import { colors } from '../../utils/colors.js';

export const add = async (args, state) => {
  const fileName = args.join(' ');
  const filePath = path.resolve(state.currentDir, fileName);

  try {
    await fs.writeFile(filePath, '', { flag: 'wx' });
    console.log(colors.green(`File ${fileName} is successfully created!`));
  } catch {
    throw new Error(`File ${fileName} already exists!`);
  }
};
