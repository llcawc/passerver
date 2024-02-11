import process from 'node:process';
import { Command } from 'commander';
const program = new Command();
import colors from 'colors/safe.js';
import server from './server.js';
import version from './version.js';
let ver = version !== null && version !== void 0 ? version : 'latest';
program.version(ver, '-v, --version', 'output the current version');
program
    .option('-p, --port <n>', 'server port number (default: 3000)')
    .option('-d, --dist [value]', 'folder for serve files (default: dist)')
    .option('-e, --e404 [value]', 'filename for page "Error 404" (default: 404.html)');
program.addHelpText('before', `${colors.green(`About:
Simple static server for local development by pasmurno from llcawc`)}
`);
const example = `${colors.magenta(`
Example call:`)}` +
    `${colors.cyan(`
  $ passerve -p 4200 -d build -e error.html`)}` +
    `
  or` +
    `${colors.cyan(`
  $ npx passerve --port 8080 --dist './static'`)}`;
program.addHelpText('after', `${example}`);
const footer = `${colors.gray('Сopyright ©2024 llcawc, MIT License. Made with')}` +
    colors.red(' ❤  ') +
    `${colors.gray('for the best architecture. \nSource: https://github.com/llcawc/passerve')}`;
program.addHelpText('afterAll', `${footer}`);
program.parse(process.argv);
const options = program.opts();
server(options);
