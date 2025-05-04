import { up } from './up.js';
import { cd } from './cd.js';
import { ls } from './ls.js';

const navCommands = new Map();
navCommands.set('up', up);
navCommands.set('cd', cd);
navCommands.set('ls', ls);

export default navCommands;
