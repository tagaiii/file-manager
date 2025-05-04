import { cat } from './cat.js';
import { add } from './add.js';
import { mkdir } from './mkdir.js';
import { rn } from './rn.js';

const basicCommands = new Map();

basicCommands.set('cat', cat);
basicCommands.set('add', add);
basicCommands.set('mkdir', mkdir);
basicCommands.set('rn', rn);

export default basicCommands;
