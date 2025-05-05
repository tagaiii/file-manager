import os from 'node:os';
import { colors } from '../../utils/colors.js';

export const homedir = () => {
  const homedir = os.homedir();

  console.log(
    colors.green(`Home directory for the current user is: ${homedir}`)
  );
};
