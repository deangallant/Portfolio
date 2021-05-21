const { src, dest, series, parallel, watch} = require('gulp');
const replaceHTML = require('gulp-html-replace')
const cleanCSS = require('gulp-clean-css')

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

function copyCSS() {
  return src('src/css/*')
  .pipe(cleanCSS())
  .pipe(dest('dist/css/'))
}

function copyImages() {
  return src('src/images/*')
  .pipe(dest('dist/images/'))
}


exports.default = series(copyHTML, copyIframes, copyJS, copyImages);
exports.copyIframes = copyIframes;
exports.copyJS = copyJS;
exports.copyCSS = copyCSS;
exports.copyImages = copyImages;