import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { colors } from '../../utils/colors.js';

export const cat = async (args, state) => {
  if (args.length !== 1) {
    throw new Error('Invalid arguments!');
  }

  const filePath = path.resolve(state.currentDir, args[0]);
  await fsPromises.access(filePath);
  const stream = fs.createReadStream(filePath, 'utf-8');

  console.log(colors.yellow(`The content of ${args.join(' ')} file:`));
  for await (const chunk of stream) {
    console.log(chunk);
  }
  console.log(colors.yellow('Reading of file is completed!'));
};
