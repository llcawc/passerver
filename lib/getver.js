var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// getver.js
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
function getVers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pathToPack = path.join(path.resolve(), 'package.json');
            const pack = JSON.parse(yield readFile(pathToPack, 'utf8'));
            let text = `export default "${pack.version}"`;
            yield writeFile(path.join(path.resolve(), 'lib', 'version.ts'), text);
            console.log('The file version has been saved!');
        }
        catch (err) {
            console.error(err);
        }
    });
}
// Run
getVers();
