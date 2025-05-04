import { cat } from './cat.js';
import { add } from './add.js';

const basicCommands = new Map();

basicCommands.set('cat', cat);
basicCommands.set('add', add);

export default basicCommands;
