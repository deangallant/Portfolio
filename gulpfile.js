const { src, dest, series, parallel, watch} = require('gulp');
const replaceHTML = require('gulp-html-replace')

function copyHTML() {
  return src('src/*.html')
  .pipe(dest('dist/'))
}

function copyIframes() {
  return src('src/Portfolio Examples/**/*')
  .pipe(dest('dist/Portfolio Examples/'));
}

function copyJS() {
  return src('src/js/*')
  .pipe(dest('dist/js/'))
}


exports.default = series(copyHTML)
exports.copyIframes = copyIframes
exports.copyJS = copyJS