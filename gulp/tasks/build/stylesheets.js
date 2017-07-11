'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const minifyCSS = require('gulp-minify-css');
const gulpIf = require('gulp-if');
const gzip = require('gulp-gzip');
const merge = require('merge-stream');
const config = require('../../config').config;


gulp.task('stylesheets:vendor', function () {
    return gulp.src(config.paths.src.stylesheets_vendor)
        .pipe(plumber(function (error) {
            gutil.log(gutil.colors.red(error.message));
            return this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.css'))
        .pipe(gulpIf(config.MINIFY_ASSETS, minifyCSS({processImport: false})))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.paths.dest.stylesheets))
        .pipe(gzip({threshold: '1kb'}))
        .pipe(gulp.dest(config.paths.dest.stylesheets))
        .on('error', notify.onError(function (error) {
            return error.message;
        }));
});


gulp.task('stylesheets:themes:default', function () {
    return gulp.src(config.paths.src.stylesheets_themes_default)
        .pipe(plumber(function (error) {
            gutil.log(gutil.colors.red(error.message));
            return this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulpIf(config.MINIFY_ASSETS, minifyCSS({processImport: false})))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.paths.dest.stylesheets))
        .pipe(gzip({threshold: '1kb'}))
        .pipe(gulp.dest(config.paths.dest.stylesheets))
        .on('error', notify.onError(function (error) {
            return error.message;
        }));
});


gulp.task('stylesheets', [
    'stylesheets:vendor',
    'stylesheets:themes:default'
]);
