import { createInterface } from 'node:readline/promises';
import os from 'node:os';
import { stdin, stdout } from 'node:process';
import { getArg } from './utils/getArg.js';
import operations from './operations/operations.js';

const username = getArg('username');
const rl = createInterface({ input: stdin, output: stdout });

const state = { currentDir: os.homedir() };

console.log(`Welcome to File manager, ${username}`);

rl.on('SIGINT', () => {
  rl.clearLine();
  rl.close();
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});

while (true) {
  console.log(`You are currently in ${state.currentDir}`);

  const input = await rl.question('>> ');
  const [commandName, ...args] = input.trim().split(' ');

  if (commandName === '.exit') {
    rl.close();
  }

  const command = operations.get(commandName);
  if (command) {
    command(args, state);
  }
}
