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
import server from 'passerve'

server({
  port: 3000, // server port number (default: 3000)
  dist: './build', // folder for serve files (default: dist)
  e404: 'error.html', // filename for page "Error 404" (default: 404.html)
})
```

The best way to apply this can be found in the gulp project assignment.

---

MIT License

Сopyright ©2024 pasmurno by llcawc. Made with <span style="color: red;">♥</span> for the best architecture
