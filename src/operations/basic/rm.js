import fs from 'node:fs/promises';
import path from 'node:path';
import { colors } from '../../utils/colors.js';

export const rm = async (args, state) => {
  if (args.length !== 1) {
    throw new Error('Invalid arguments!');
  }

  const fileName = args[0];
  const filePath = path.resolve(state.currentDir, fileName);

  await fs.rm(filePath);
  console.log(colors.green(`File ${fileName} is successfully removed!`));
};
