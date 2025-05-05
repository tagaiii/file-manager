import os from 'node:os';
import { colors } from '../../utils/colors.js';

export const username = () => {
  const userInfo = os.userInfo();

  console.log(colors.green(`Username is ${userInfo.username}`));
};
