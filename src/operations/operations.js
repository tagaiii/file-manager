import navCommands from './navigation/navCommands.js';
import basicCommands from './basic/basicCommands.js';
import zipCommands from './zip/zipCommands.js';
import { os } from './os/os.js';
import { hash } from './hash/hash.js';

const operations = new Map([...navCommands, ...basicCommands, ...zipCommands]);
operations.set('os', os);
operations.set('hash', hash);

export default operations;
