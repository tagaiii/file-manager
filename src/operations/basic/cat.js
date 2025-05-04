import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { colors } from '../../utils/colors.js';

export const cat = async (args, state) => {
  const filePath = path.resolve(state.currentDir, args.join(' '));
  try {
    await fsPromises.access(filePath);
    const stream = fs.createReadStream(filePath, 'utf-8');

    console.log(colors.yellow(`The content of ${args.join(' ')} file:`));
    for await (const chunk of stream) {
      console.log(chunk);
    }
    console.log(colors.yellow('Reading of file is completed!'));
  } catch {
    throw new Error('File is not found!');
  }
};
