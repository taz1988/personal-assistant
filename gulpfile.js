let gulp         = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let babel        = require('gulp-babel');
let minifyCSS    = require('gulp-minify-css');
let less         = require('gulp-less');
let del          = require('del');
let browserSync  = require('browser-sync');
let reload       = browserSync.reload;
let concat       = require('gulp-concat');
let sourcemaps   = require('gulp-sourcemaps');

let targetMainPath = "build/";


gulp.task('clean', function() {
  return del([targetMainPath + '**']);
});

function copyReact() {
  return gulp.src('node_modules/react-js/cjs/react-is.production.min.js')
    .pipe(gulp.dest('src/js/lib'));
};

function copyReactDom() {
  return gulp.src('node_modules/react-dom/cjs/react-dom.production.min.js')
    .pipe(gulp.dest('src/js/lib'));
};

gulp.task('copyJsDependencies', gulp.series(copyReact, copyReactDom));

gulp.task('concat', function() {
  return gulp.src(jsFiles.vendor.concat(jsFiles.source))
    .pipe(sourcemaps.init())
    .pipe(babel({
      only: [
        'assets/js/src/components',
      ],
      compact: false
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('compileJs', gulp.series('copyJsDependencies'));

gulp.task('compileLess', function() {

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
});

gulp.task('watch', function()
{
    gulp.watch('src/css/*.less',  gulp.series('compileLess'));
});

gulp.task('default', gulp.series('clean', gulp.parallel('compileJs', 'compileLess'), 'watch'));
