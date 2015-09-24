/*
 * gulp js
 */

var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

gulp.task('js', function () {
  gulp.src(config.js + 'main.js')
    .pipe($.plumber())
    .pipe($.include()).on('error', console.log)
    .pipe($.size({ title: 'Scripts', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.js))
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.size({ title: 'Scripts', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.js))
    .pipe($.plumber.stop());
});