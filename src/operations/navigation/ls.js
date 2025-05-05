import fs from 'node:fs/promises';

export const ls = async (args, state) => {
  const content = await fs.readdir(state.currentDir, { withFileTypes: true });

  const folders = content
    .filter((dirent) => dirent.isDirectory())
    .map((dir) => ({ name: dir.name, type: 'directory' }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const files = content
    .filter((dirent) => dirent.isFile())
    .map((dir) => ({ name: dir.name, type: 'file' }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const allDirents = [...folders, ...files];

  console.table(allDirents);
};
