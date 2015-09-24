/*
* gulp html
*/

var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var jade = require('jade');

gulp.task('html', function() {
  gulp.src(config.jade + '*.jade')
  .pipe($.jade({
    jade: jade,
    pretty: true
  }))
  .pipe($.size({ title: 'HTML', gzip: false, showFiles: true }))
  .pipe(gulp.dest(config.dist));
});