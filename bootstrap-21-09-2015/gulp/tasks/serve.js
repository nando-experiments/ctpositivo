/*
 * gulp serve
 */

var config = require('../config.json');
var bSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('serve', function () {
  // watch sass files
  gulp.watch(config.sass + '**/*.scss', ['sass']);

  // watch jade files
  gulp.watch(config.jade + '**/*.jade', ['html']);

  // watch js files
  gulp.watch(config.js + '**/*.js', ['js']);

  bSync.init({
    notify: false,
    open: "external",
    logPrefix: 'browser-sync',
    server: config.dist
  });

  gulp.watch(config.dist + '**/*.{html,css,js}').on('change', bSync.reload);
});