import { createInterface } from 'node:readline/promises';
import os from 'node:os';
import { stdin, stdout } from 'node:process';
import { getArg } from './utils/getArg.js';
import operations from './operations/operations.js';
import { colors } from './utils/colors.js';

const username = getArg('username') || 'Anonymous';
const rl = createInterface({ input: stdin, output: stdout });

const state = { currentDir: os.homedir() };

console.log(`Welcome to File manager, ${username}`);
console.log(`You are currently in ${state.currentDir}`);

rl.on('SIGINT', () => {
  rl.clearLine();
  rl.close();
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});

while (true) {
  const input = await rl.question('>> ');
  const [commandName, ...args] = input.trim().split(' ');

  if (commandName === '.exit') {
    rl.close();
  }

  const command = operations.get(commandName);
  try {
    if (command) {
      await command(args, state);
    } else {
      console.log('Invalid input');
    }
  } catch (error) {
    console.error(colors.red('Operation failed!'));
    console.error(colors.red(error.message));
  }

  console.log(`You are currently in ${state.currentDir}`);
}
