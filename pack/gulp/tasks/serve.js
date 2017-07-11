'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const browserSync = require('browser-sync');
const config = require('../config').config;


gulp.task('serve', function() {
    return browserSync({
        server: {
            baseDir: config.paths.dest.base
        },
        port: config.HTTP_SERVER_PORT,
        open: config.HTTP_SERVER_OPEN_IN_BROWSER,
        files: config.paths.dest.livereload
    });
});
