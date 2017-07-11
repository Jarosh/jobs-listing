'use strict';

const gulp = require('gulp');
const config = require('../config');
const runSequence = require('run-sequence');


gulp.task('build', function(done) {
    runSequence(
        [
            'clean',
            //'bower:install',
            'jshint'
        ],
        [
            'assets',
            'mocks',
            'scripts',
            'stylesheets',
            'templates',
            'views'
        ],
        done
    );
});
