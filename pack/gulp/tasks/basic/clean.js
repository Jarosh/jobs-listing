'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const config = require('../../config').config;


gulp.task('clean', function() {
    return gulp.src(config.paths.dest.base, {read: false})
        .pipe(clean({force: true}));
});
