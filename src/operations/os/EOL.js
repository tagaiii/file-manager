import os from 'node:os';
import { colors } from '../../utils/colors.js';

export const EOL = () => {
  const eol = os.EOL;
  console.log(
    colors.green(`EOL character of your system is: ${JSON.stringify(eol)}`)
  );
};
