const gulp          = require('gulp');
const webpack       = require('webpack');
const webpackConfig = require('./webpack.config.js')
const del          = require('del');

const targetMainPath = "build/";


function clean() {
  return del([targetMainPath + '**']);
};

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
exports.default = gulp.series(clean, executeWebpack);
