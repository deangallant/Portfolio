const { src, dest, series, parallel, watch} = require('gulp');


function copyHTML() {
  return src('src/*.html')
  .pipe(dest('dist/'))
}


function copyIframes() {
  return src('src/Portfolio Examples/**/*')
  .pipe(dest('dist/Portfolio Examples/'));
}


exports.default = series(copyHTML)
exports.copyIframes = copyIframes