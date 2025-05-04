import path from 'node:path';
import os from 'node:os';

const rootDir = path.parse(os.homedir()).root;

export const up = (args, state) => {
  const parentDir = path.dirname(state.currentDir);

  if (!parentDir.startsWith(rootDir)) {
    throw new Error('Root directory is reached!');
  }

  state.currentDir = parentDir;
};
