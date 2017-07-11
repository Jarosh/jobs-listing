'use strict';

require('./tasks/basic/clean');
require('./tasks/basic/bower');
require('./tasks/basic/jshint');

require('./tasks/build/assets');
require('./tasks/build/mocks');
require('./tasks/build/scripts');
require('./tasks/build/stylesheets');
require('./tasks/build/templates');
require('./tasks/build/views');

require('./tasks/build');
require('./tasks/watch');
require('./tasks/serve');


const gulp = require('gulp');
const runSequence = require('run-sequence');
const config = require('./config').config;

//TODO: Create different task for production

if (config.APP_ENV === 'production') {
    gulp.task('default', function (done) {
        runSequence('build', done);
    });
} else {
    gulp.task('default', function (done) {
        runSequence('build', ['watch', 'serve'], done);
    });
}