'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');
const path = require('path');


gulp.task('bower:install', shell.task('node_modules' + path.sep + '.bin' + path.sep + 'bower install'));


gulp.task('bower', [
    'bower:install'
]);
