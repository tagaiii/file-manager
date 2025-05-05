import navCommands from './navigation/navCommands.js';
import basicCommands from './basic/basicCommands.js';
import { os } from './os/os.js';

const operations = new Map([...navCommands, ...basicCommands]);
operations.set('os', os);

export default operations;
