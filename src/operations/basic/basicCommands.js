import { cat } from './cat.js';
import { add } from './add.js';
import { mkdir } from './mkdir.js';
import { rn } from './rn.js';
import { rm } from './rm.js';
import { cp } from './cp.js';
import { mv } from './mv.js';

const basicCommands = new Map();

basicCommands.set('cat', cat);
basicCommands.set('add', add);
basicCommands.set('mkdir', mkdir);
basicCommands.set('rn', rn);
basicCommands.set('rm', rm);
basicCommands.set('cp', cp);
basicCommands.set('mv', mv);

export default basicCommands;
