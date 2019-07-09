let gulp         = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let babel        = require('gulp-babel');
let minifyCSS    = require('gulp-minify-css');
let less         = require('gulp-less');
let del          = require('del');
let browserSync  = require('browser-sync');
let reload       = browserSync.reload;

let targetMainPath = "build/";

function clean() {
  return del([targetMainPath + '**']);
}

function compileLess() {

  let lessConfig = {
    compress: true
  };

  let autoPrefixerOptions = {
    browsers: ['last 2 versions']
  };

  let minifyCssConfig = {
    keepBreaks: false
  }

  return gulp.src(['src/css/*.less'])
    .pipe(less(lessConfig).on('error', console.log))
    .pipe(autoprefixer())
    .pipe(minifyCSS(minifyCssConfig))
    .pipe(gulp.dest(targetMainPath + "css/"));
    //.pipe(browserSync.reload.reload());
};

function watch()
{
    gulp.watch('src/css/*.less',  gulp.series(compileLess));
}

exports.clean = clean;
exports.default = gulp.series(clean, compileLess, watch);
