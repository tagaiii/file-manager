import path from 'node:path';
import fs from 'node:fs/promises';

export const cd = async (args, state) => {
  if (args.length === 0) {
    throw new Error('Invalid arguments!');
  }

  const inputPath = args.join(' ');
  const targetPath = path.isAbsolute(inputPath)
    ? inputPath
    : path.resolve(state.currentDir, inputPath);

  try {
    const stat = await fs.stat(targetPath);

    if (!stat.isDirectory()) {
      throw new Error('Target path is not a directory!');
    }

    state.currentDir = targetPath;
  } catch {
    throw new Error('Directory does not exist or access is denied!');
  }
};
