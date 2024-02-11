// getver.js
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

async function getVers(): Promise<void> {
  try {
    const pathToPack: string = path.join(path.resolve(), 'package.json')
    const pack = JSON.parse(await readFile(pathToPack, 'utf8'))
    let text = `export default "${pack.version}"`
    await writeFile(path.join(path.resolve(), 'lib', 'version.js'), text)
    console.log('The file version.js has been saved!')
  } catch (err) {
    console.error(err)
  }
}
// Run
getVers()
