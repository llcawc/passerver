import express from 'express'
import http from 'node:http'
import path from 'node:path'
const __dirname = path.resolve()
import colors from 'colors/safe.js'
import { Args } from './types.js'

const app = express()
const appServe = http.createServer(app)

export default function server(args: Args = { port: 3000, dist: path.resolve(__dirname, 'dist'), e404: '404.html' }) {
  const port = args.port ?? 3000
  const dist = args.dist ?? path.resolve(__dirname, 'dist')
  const e404 = args.e404 ?? '404.html'

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Expose-Headers', 'Content-Length')
    res.header('Access-Control-Allow-Headers', 'range')
    res.header('X-Served-Static-By', 'passerve')
    next()
  })
  // Server static files
  app.use(express.static(dist))

  // All other send page Error 404
  app.use((req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, dist, e404))
  })

  appServe.listen(port, () => {
    console.log(
      colors.green('Server is running successfully at:'),
      colors.yellow(`http://localhost${port == 80 ? '' : `:${port}`}/`),
      colors.magenta(`\nFolder for scanning static files:`),
      colors.gray(dist),
      colors.magenta('\nName page "Error 404":'),
      colors.gray(e404)
    )
  })
}
