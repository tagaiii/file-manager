import navCommands from './navigation/navCommands.js';
import basicCommands from './basic/basicCommands.js';
import { os } from './os/os.js';
import { hash } from './hash/hash.js';

const operations = new Map([...navCommands, ...basicCommands]);
operations.set('os', os);
operations.set('hash', hash);

export default operations;
