import { Args } from './types.js';
/**
 * Creating a Static file server
 * @param args - Optional parameters: server port, source file folder and file name for error 404
 * @type type Args = { port: number; dist: string; e404: string }
 */
export default function server(args?: Args): Promise<void>;
