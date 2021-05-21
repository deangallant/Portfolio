const { src, dest, series, parallel, watch} = require('gulp');
const replaceHTML = require('gulp-html-replace')
const cleanCSS = require('gulp-clean-css')
const sourceMaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

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
  .pipe(sourceMaps.init())
  //.pipe(uglify())
  .pipe(sourceMaps.write())
  .pipe(dest('dist/js/'))
}

function copyCSS() {
  return src('src/css/*')
  .pipe(sourceMaps.init())
  .pipe(cleanCSS())
  .pipe(sourceMaps.write())
  .pipe(dest('dist/css/'))
}

function copyImages() {
  return src('src/images/*')
  .pipe(imagemin())
  .pipe(dest('dist/images/'))
}


exports.default = series(copyHTML, copyIframes, copyJS, copyCSS, copyImages);
exports.copyIframes = copyIframes;
exports.copyJS = copyJS;
exports.copyCSS = copyCSS;
exports.copyImages = copyImages;

//git subtree push --prefix dist origin gh-pages
//movie database
//crypto