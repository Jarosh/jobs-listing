'use strict';

const gulp = require('gulp');
const gzip = require('gulp-gzip');
const config = require('../../config').config;


gulp.task('mocks', function () {
    return gulp.src(config.paths.src.mocks)
        .pipe(gulp.dest(config.paths.dest.mocks));
});
