import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { colors } from '../../utils/colors.js';
import { cp } from './cp.js';

export const mv = async (args, state) => {
  if (args.length !== 2) {
    throw new Error('Invalid arguments!');
  }

  await cp(args, state, false);
  const srcFilePath = path.resolve(state.currentDir, args[0]);
  const destPath = path.resolve(state.currentDir, args[1]);
  await fsPromises.rm(srcFilePath);

  console.log(
    colors.green(`File ${args[0]} is successfully moved to ${destPath}`)
  );
};
