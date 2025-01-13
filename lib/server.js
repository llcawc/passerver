import express from 'express';
import http from 'node:http';
import { resolve, join } from 'node:path';
import fs from 'node:fs/promises';
import { constants } from 'fs';
import colors from 'colors/safe.js';
import { content } from './error.js';
const __dirname = resolve();
const app = express();
const appServe = http.createServer(app);
/**
 * Creating a Static file server
 * @param args - Optional parameters: server port, source file folder and file name for error 404
 * @type type Args = { port: number; dist: string; e404: string }
 */
export default async function server(args = { port: 3000, dist: join(__dirname, 'dist'), e404: '404.html' }) {
    const port = args.port ?? 3000;
    const dist = args.dist ?? join(__dirname, 'dist');
    const e404 = args.e404 ?? '404.html';
    let isE404 = false; // file '404.html' is out in dist folder
    let nameErr = resolve(__dirname, dist, e404); // true name file Error404
    // Checking for the error's file in the dist folder
    try {
        await fs.access(nameErr, constants.F_OK);
        isE404 = true;
    }
    catch {
        console.log(colors.yellow(`Warning: File ${nameErr} cannot read`));
        nameErr = 'the default page';
    }
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Expose-Headers', 'Content-Length');
        res.header('Access-Control-Allow-Headers', 'range');
        res.header('X-Served-Static-By', 'passerve');
        next();
    });
    // Server static files
    app.use(express.static(dist));
    // All other send page Error 404
    app.use((req, res) => {
        if (isE404) {
            res.status(404).sendFile(resolve(__dirname, dist, e404));
        }
        else {
            res.status(404).send(content);
        }
    });
    appServe.listen(port, () => {
        console.log(colors.green('Server is running successfully at:'), colors.cyan(`http://localhost${port == 80 ? '' : `:${port}`}/`), colors.magenta(`\nFolder for static files:`), colors.gray(dist), colors.magenta('\nPage "Error 404":'), colors.gray(nameErr));
    });
}
