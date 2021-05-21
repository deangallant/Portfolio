const { src, dest, series, parallel, watch} = require('gulp');


function copyHTML() {
  return src('src/*.html')
  .pipe(dest('dist/'))
}

function copyIframes() {
  return src('src/Alien Invasion/*')
  .pipe(dest('dist/Alien Invasion/'));
}


exports.default = series(copyHTML)
exports.copyIframes = copyIframes