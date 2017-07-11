'use strict';

const gulp = require('gulp');
const config = require('../config').config;


gulp.task('watch', function() {
    gulp.watch(config.paths.src.assets_index, ['assets:index']);
    gulp.watch(config.paths.src.assets_fonts, ['assets:fonts']);
    gulp.watch(config.paths.src.assets_images, ['assets:images']);
    gulp.watch(config.paths.src.mocks, ['mocks']);
    gulp.watch(config.paths.src.scripts_app, ['scripts:app']);
    gulp.watch(config.paths.src.stylesheets_themes_default, ['stylesheets:themes:default']);
    gulp.watch(config.paths.src.templates_app, ['templates:app']);
    gulp.watch(config.paths.src.templates_com, ['templates:com']);
    gulp.watch(config.paths.src.views, ['views']);
});
