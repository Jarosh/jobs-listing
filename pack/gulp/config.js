'use strict';

const process = require('process');
const gulp = require('gulp');

// Replace it f.e. by `env APP_ENV='production' gulp` or `gulp --env production`
var APP_ENV = process.env.APP_ENV || gulp.env.env || 'development';
var configFile = 'src/config/env-devel.js';
if (APP_ENV === 'local') {
    configFile = 'src/config/env-local.js';
} else if (APP_ENV === 'production') {
    configFile = 'src/config/env-prod.js';
}


exports.config = {

    HTTP_SERVER_PORT: 3000,
    HTTP_SERVER_OPEN_IN_BROWSER: true,

    APP_ENV: APP_ENV,
    MINIFY_ASSETS: APP_ENV === 'production',

    paths: {

        src: {

            assets_index: [
                'src/favicon.ico',
                'src/robots.txt'
            ],
            assets_fonts: 'src/themes/default/fonts/**',
            assets_img: 'src/themes/default/images/**',

            mocks: 'src/mocks/**/*.json',

            scripts_app: [
                'src/js/module.js',
                'src/js/routes.js',
                configFile,
                'src/js/**/*.js'
            ],

            scripts_vendor: [
                'assets/jquery/jquery-3.2.1.min.js',
                'assets/bootstrap/tether.min.js',
                'assets/bootstrap/bootstrap.min.js'
            ],

            stylesheets_vendor: [
                'assets/bower/angular-material/angular-material.css',
                'assets/bootstrap/bootstrap.min.css',
                'assets/bower/font-awesome/css/font-awesome.min.css'
            ],

            stylesheets_themes_default: [
                'src/themes/default/styles/**/*.scss'
            ],

            templates_app: [
                'src/js/app/**/*.html'
            ],

            templates_com: [
                'src/js/elements/**/*.html'
            ],

            views: [
                'src/index.html',
                'src/404.html'
            ]

        },

        dest: {

            base: 'web',
            base_css: 'web/css',

            assets_index: 'web',
            assets_fonts: 'web/fonts',
            assets_img: 'web/images',

            mocks: 'web/json',

            scripts: 'web/app',

            stylesheets: 'web/css',

            templates_app: 'web/tpl/app',
            templates_com: 'web/tpl',

            views: 'web',

            livereload: [
                'web/**/*',
                '!web/**/*.map'
            ]

        }

    }

};