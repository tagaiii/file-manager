import { architecture } from './architecture.js';
import { cpus } from './cpus.js';
import { EOL } from './EOL.js';
import { homedir } from './homedir.js';
import { username } from './username.js';

const osFlags = new Map();

osFlags.set('--EOL', EOL);
osFlags.set('--cpus', cpus);
osFlags.set('--homedir', homedir);
osFlags.set('--username', username);
osFlags.set('--architecture', architecture);

export const os = (args, state) => {
  if (args.length !== 1 || !osFlags.has(args[0])) {
    throw new Error('Invalid arguments!');
  }

  const command = osFlags.get(args[0]);
  command();
};
