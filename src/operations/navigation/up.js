import path from 'node:path';
import os from 'node:os';

const rootDir = os.homedir();

export const up = (args, state) => {
  const parentDir = path.dirname(state.currentDir);

  if (!parentDir.startsWith(rootDir)) {
    throw new Error('Root directory is reached!');
  }

  state.currentDir = parentDir;
};
