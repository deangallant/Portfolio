const { src, dest, series, parallel, watch} = require('gulp');


function copyHTML() {
  return src('src/*.html')
  .pipe(dest('dist/'))
}


exports.default = copyHTML