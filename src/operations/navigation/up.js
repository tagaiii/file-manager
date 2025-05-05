import path from 'node:path';
import os from 'node:os';

const rootDir = path.parse(os.homedir()).root;

export const up = (args, state) => {
  if (state.currentDir === rootDir) {
    throw new Error('Root directory is reached!');
  }

  const parentDir = path.dirname(state.currentDir);
  state.currentDir = parentDir;
};
