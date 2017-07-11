'use strict';

const gulp = require('gulp');
const gzip = require('gulp-gzip');
const config = require('../../config').config;


gulp.task('assets:index', function () {
    return gulp.src(config.paths.src.assets_index)
        .pipe(gulp.dest(config.paths.dest.assets_index));
});


gulp.task('assets:fonts', function () {
    return gulp.src(config.paths.src.assets_fonts)
        .pipe(gulp.dest(config.paths.dest.assets_fonts))
        .pipe(gzip({ threshold: '1kb' }))
        .pipe(gulp.dest(config.paths.dest.assets_fonts));
});


gulp.task('assets:images', function () {
    return gulp.src(config.paths.src.assets_img)
        .pipe(gulp.dest(config.paths.dest.assets_img));
});


gulp.task('assets:other', function () {
    return gulp.src([
        'assets/bower/angular-ui-grid/ui-grid.ttf',
        'assets/bower/angular-ui-grid/ui-grid.woff'
    ]).pipe(gulp.dest(config.paths.dest.base_css));
});


gulp.task('assets', [
    'assets:index',
    'assets:fonts',
    'assets:images',
    'assets:other'
]);
