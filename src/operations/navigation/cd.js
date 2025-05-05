import path from 'node:path';
import fs from 'node:fs/promises';

export const cd = async (args, state) => {
  if (args.length !== 1) {
    throw new Error('Invalid arguments!');
  }

  const inputPath = args[0];
  const isDrivePath = /^.:$/.test(inputPath);

  const targetPath = isDrivePath
    ? inputPath + '\\'
    : path.isAbsolute(inputPath)
    ? inputPath
    : path.resolve(state.currentDir, inputPath);

  const stat = await fs.stat(targetPath);

  if (!stat.isDirectory()) {
    throw new Error('Target path is not a directory!');
  }

  state.currentDir = targetPath;
};
