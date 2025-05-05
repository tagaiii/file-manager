import { compress } from './compress.js';
import { decompress } from './decompress.js';

const zipCommands = new Map();
zipCommands.set('compress', compress);
zipCommands.set('decompress', decompress);

export default zipCommands;
