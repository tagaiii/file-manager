import path from 'node:path';
import os from 'node:os';

const rootDir = os.homedir();

export const up = (args, state) => {
  const parentDir = path.dirname(state.currentDir);

  if (!parentDir.startsWith(rootDir)) {
    console.log('Root directory is reached!');
    return;
  }

  state.currentDir = parentDir;
};
