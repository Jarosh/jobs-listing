'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const gzip = require('gulp-gzip');
const merge = require('merge-stream');
const gulpFilter = require('gulp-filter');
const mainBowerFiles = require('gulp-main-bower-files');
const config = require('../../config').config;


gulp.task('scripts:app', function () {
    // put app js into web dir
    // app js contains all angular components and the angular app and routes
    return gulp.src(config.paths.src.scripts_app)
        .pipe(plumber(function (error) {
            gutil.log(gutil.colors.red(error.message));
            return this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(gulpIf(config.MINIFY_ASSETS, uglify()))
        .pipe(sourcemaps.write('./'))
        .on('error', notify.onError(function (error) {
            return error.message;
        }))
        .pipe(gulp.dest(config.paths.dest.scripts))
        .pipe(gzip())
        .pipe(gulp.dest(config.paths.dest.scripts));
});


gulp.task('scripts:vendor', function () {
    var bower = gulp.src('./bower.json')
        .pipe(mainBowerFiles({debugging: false}))
        .pipe(gulpFilter('**/*.js', {restore: true}));
    var other = gulp.src(config.paths.src.scripts_vendor);
    return merge(bower, other)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(gulpIf(config.MINIFY_ASSETS, uglify()))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.paths.dest.scripts))
        .pipe(gzip())
        .pipe(gulp.dest(config.paths.dest.scripts));
});


gulp.task('scripts', [
    'scripts:app',
    'scripts:vendor'
]);
