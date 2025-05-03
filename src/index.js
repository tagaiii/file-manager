import { createInterface } from 'node:readline/promises';
import os from 'node:os';
import { stdin, stdout } from 'node:process';
import { getArg } from './utils/getArg.js';

const username = getArg('username');
const homedir = os.homedir();
const rl = createInterface({ input: stdin, output: stdout });

console.log(`Welcome to File manager, ${username}`);
console.log(`You are currently in ${homedir}`);

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
  const [command, ...args] = input.trim().split(' ');

  if (command === '.exit') {
    rl.close();
  }
}
