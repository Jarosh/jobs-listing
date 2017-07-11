'use strict';

const gulp   = require('gulp');
const jshint = require('gulp-jshint');
const config = require('../../config').config;


gulp.task('jshint', function() {
  return gulp.src(config.paths.src.scripts_app)
    .pipe(jshint())
    .pipe(jshint.reporter(require('jshint-stylish')));
});
