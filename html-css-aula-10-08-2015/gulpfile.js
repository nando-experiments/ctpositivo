/**
 *  Gulp nandomoreira.me
 */

'use strict';

var gulp  = require('gulp');
var $     = require('gulp-load-plugins')();
var bSync = require('browser-sync').create();
var jade  = require('jade');

gulp.task('default', ['serve'])

.task('sass', function () {
  gulp.src('./src/sass/main.scss')
    .pipe($.compass({
      config_file: './config.rb',
      css: 'dist/css',
      sass: './src/sass'
    }))
    .pipe($.minifyCss())
    .pipe($.rename({ suffix: ".min" }))
    .pipe($.size({title: 'styles'}))
    .pipe(gulp.dest('dist/css'));
})

.task('html', function() {
  gulp.src('./src/jade/*.jade')
    .pipe($.jade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('./dist'))
})

.task('serve', function () {
  bSync.init({
    notify: false,
    open: "external",
    logPrefix: 'browser-sync',
    server: 'dist'
  });

  gulp.watch(['./src/sass/**/*.scss'], ['sass']);
  gulp.watch(['./src/jade/**/*.jade'], ['html']);
  gulp.watch('./dist/**/*.{html,css}').on('change', bSync.reload);
})
;
