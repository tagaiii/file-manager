import path from 'node:path';
import os from 'node:os';
import fs from 'node:fs/promises';

export const cd = async (args, state) => {
  if (args.length === 0) {
    throw new Error('Invalid arguments!');
  }

  const rootDir = os.homedir();
  const targetPath = path.isAbsolute(args[0])
    ? args[0]
    : path.resolve(rootDir, args[0]);

  const relative = path.relative(rootDir, targetPath);

  const isInsideRoot =
    relative && !relative.startsWith('..') && !path.isAbsolute(relative);

  if (!isInsideRoot) {
    throw new Error('Cannot navigate outside of root directory!');
  }
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
