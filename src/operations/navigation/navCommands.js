import { up } from './up.js';
import { cd } from './cd.js';

const navCommands = new Map();
navCommands.set('up', up);
navCommands.set('cd', cd);

export default navCommands;
