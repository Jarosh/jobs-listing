'use strict';

const gulp = require('gulp');
const config = require('../../config').config;


gulp.task('templates:app', function() {
    return gulp.src(config.paths.src.templates_app)
        .pipe( gulp.dest(config.paths.dest.templates_app) );
});


gulp.task('templates:com', function() {
    return gulp.src(config.paths.src.templates_com)
        .pipe( gulp.dest(config.paths.dest.templates_com) );
});


gulp.task('templates', [
    'templates:app',
    'templates:com'
]);
