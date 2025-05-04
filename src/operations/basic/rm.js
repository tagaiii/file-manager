import fs from 'node:fs/promises';
import path from 'node:path';
import { colors } from '../../utils/colors.js';

export const rm = async (args, state) => {
  if (args.length === 0) {
    throw new Error('Invalid arguments!');
  }

  const fileName = args.join(' ');
  const filePath = path.resolve(state.currentDir, fileName);

  try {
    await fs.rm(filePath);
    console.log(colors.green(`File ${fileName} is successfully removed!`));
  } catch {
    throw new Error(`File ${fileName} is not found or access denied!`);
  }
};
