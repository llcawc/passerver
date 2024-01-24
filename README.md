# passerve

> simple static server for local development

## Getting started

Install the `passerve` as global package:

```bash
npm install -g passerve
```

or install local in project:

```bash
npm install --save-dev passerve
```

## Commands

Usage for global install:

```bash
$ passerve [options]
```

Usage for install in project:

```bash
$ npx passerve [options]
```

### Use in `package.json` scripts:

```json
  "scripts": {
    "serve": "passerve [options]"
  }
```

and start this:

```bash
$ npm run serve
```

## Options:

```
  -v, --version       output the current version
  -p, --port <n>      server port number (default: 3000)
  -d, --dist [value]  folder for serve files (default: dist)
  -e, --e404 [value]  filename for page "Error 404" (default: 404.html)
  -h, --help          display help for command
```

## Example call:

```bash
$ passerve -p 4200 -d build -e error.html
```

or

```bash
$ npx passerve --port 8080 --dist './static'
```

## API / Gulp

You can programmatically start the local server if you import the server() function from the passerve package:

```js
// gulpfile.js

import gulp from 'gulp'
const { src, dest, series, parallel, watch } = gulp
import server from 'passerve'

function browse() {
  server({
    port: 3000, // server port number (default: 3000)
    dist: 'dist', // folder for serve files (default: dist)
    e404: 'error.html', // filename for page "Error 404" (default: 404.html)
  })
}

function copy() {
  return src('src/**/*.*').pipe(dest('dist'))
}

function watchdev() {
  watch('src/**/*.*', copy)
}

export let serve = parallel(watchdev, browse)
export let dev = series(copy, serve)
```

The best way to apply this can be found in the gulp project assignment.

---

## License

MIT ©2024 pasmurno by [llcawc](https://github.com/llcawc). Made with <span style="color: rgb(230 15 10);">❤</span> for the best architecture
