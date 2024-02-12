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
const header = `
${colors.gray(`• passerve version: ${ver}`) + colors.green('\nSimple static server for local development by pasmurno from llcawc\n')}`;
program.addHelpText('before', header);
const example = `
${colors.magenta('Example call:\n') +
    colors.cyan('   $ passerve\n') +
    colors.cyan('   $ passerve -p 4200 -d build -e error.html\n') +
    colors.cyan("   $ npx passerve --port 8080 --dist './static'") +
    colors.green('  // local use')}`;
program.addHelpText('after', example);
const footer = `
${colors.gray('Сopyright ©2024 llcawc, MIT License. Made with') +
    colors.red(' ♥ ') +
    colors.gray('for the best architecture. \nSource: https://github.com/llcawc/passerve')}
`;
program.addHelpText('afterAll', footer);
program.parse(process.argv);
const options = program.opts();
server(options);
