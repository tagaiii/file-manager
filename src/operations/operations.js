import navCommands from './navigation/navCommands.js';
import basicCommands from './basic/basicCommands.js';

const operations = new Map([...navCommands, ...basicCommands]);

export default operations;
