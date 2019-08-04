const gulp          = require('gulp');
const webpack       = require('webpack');
const webpackConfig = require('./webpack.config.js')
const del          = require('del');
const s3 = require('gulp-s3-upload')();

const targetMainPath = "build/";


function clean() {
  return del([targetMainPath + '**']);
};

function releaseToBucket()
{
  return gulp.src("./build/**")
  .pipe(s3({
    Bucket: 'personal-assistant'
  }));
}

function executeWebpack(cb)
{
      webpack(webpackConfig, (err, stats) => {
        console.log(err);
          if (err) {
              cb(err)
          }
          if (stats.hasErrors()) {
              cb(new Error(stats.compilation.errors.join('\n')))
          }
          cb()
      });
}

function watch()
{
    gulp.watch('src/css/*.less',  gulp.series('compileLess'));
};


exports.webpack  = executeWebpack;
exports.release = releaseToBucket;
exports.default = gulp.series(clean, executeWebpack);
