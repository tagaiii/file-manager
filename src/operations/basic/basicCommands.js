import { cat } from './cat.js';
import { add } from './add.js';
import { mkdir } from './mkdir.js';

const basicCommands = new Map();

basicCommands.set('cat', cat);
basicCommands.set('add', add);
basicCommands.set('mkdir', mkdir);

export default basicCommands;
