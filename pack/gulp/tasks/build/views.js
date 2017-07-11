'use strict';

const gulp = require('gulp');
const config = require('../../config').config;


gulp.task('views', function() {
    return gulp.src(config.paths.src.views)
        .pipe( gulp.dest(config.paths.dest.views) );
});
