// gulpfile.js

import gulp from 'gulp'
const { src, dest, series, parallel, watch } = gulp
import pug from 'gulp-pug'
import prettier from 'gulp-prettier'
import { deleteAsync as del } from 'del'
import server from './server.js'

const baseDir = 'src'
const distDir = 'dist'

function browse() {
  server()
}

function assemble() {
  return src(baseDir + '/pages/**/*.pug')
    .pipe(pug())
    .pipe(prettier())
    .pipe(dest(distDir))
}

function assets() {
  return src([baseDir + '/assets/**/*.*'], { base: baseDir }).pipe(dest(distDir))
}

function clean() {
  return del([distDir + '/**'])
}

function watcher() {
  watch(baseDir + '/**/*.*', parallel(assemble, assets))
}

export { clean }
export let serve = parallel(watcher, browse)
export let build = series(clean, assemble, assets)
export let dev = series(clean, assemble, assets, serve)
