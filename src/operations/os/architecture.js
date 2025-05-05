import os from 'node:os';
import { colors } from '../../utils/colors.js';

export const architecture = () => {
  const arch = os.arch();

  console.log(
    colors.green(
      `Architecture for which the Node.js binary was compiled is: ${arch}`
    )
  );
};
