'use strict';

const gulp         = require('gulp');
const fs           = require('fs');
const fractal      = require('./fractal.config.js');
const logger       = fractal.cli.console;
const less         = require('gulp-less');
const lessGlob     = require('gulp-less-glob');
const concat       = require('gulp-concat');
const rename       = require('gulp-rename');
const uglify       = require('gulp-uglify');
const plumber      = require('gulp-plumber');
const notify       = require('gulp-notify');
const inject       = require('gulp-inject-string');
const sourcemaps   = require('gulp-sourcemaps');
const path         = require('path');


gulp.task('less',function() {
    return gulp.src([
        '../site/templates/public/css/main.less',
        '../site/templates/views/**/*.less',
        '../site/templates/public/vendor/lightbox/css/lightbox.less',
        '../site/templates/public/vendor/slick/slick.less',
    ])
    .pipe(sourcemaps.init())
    .pipe(customPlumber('Error running Less'))
    .pipe(concat('style_concat.less'))
    .pipe(gulp.dest('../site/templates/public/css'))
    .pipe(lessGlob())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../site/templates/public/css'))
});

gulp.task('scripts', function() {
    return gulp.src([
        '../site/templates/public/js/global.js',
        '../site/templates/views/**/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('temp.js'))
    .pipe(inject.wrap('$(document).ready(function(){', '});'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../site/templates/public/js'));
});

gulp.task('final-scripts', function(){
    return gulp.src([
        '../site/templates/public/vendor/**/*.js',
        '../site/templates/public/js/temp.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('../site/templates/public/js'));
});

gulp.task('watch', function() {
    gulp.watch([
        '../site/templates/views/**/*.less',
        '../site/templates/public/**/*.less',
        '!../site/templates/public/css/style_concat.less'
        ], gulp.series('less'));
    gulp.watch([
        '../site/templates/views/vendor/**/*.js',
        '../site/templates/public/js/global.js',
        '../site/templates/views/**/*.js'
         ], gulp.series('scripts', 'final-scripts'));
});


function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            title: errTitle || "Error running Gulp",
            message: "Error: <%= error.message %>",
        })
    });
}

gulp.task('fractal:start', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});


gulp.task('fractal:build', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});


gulp.task('default', gulp.series('fractal:start', 'less', 'scripts', 'final-scripts', 'watch'));


/**
 * Task to automatically build the parsys-file
 */

gulp.task('build-parsys', done => {

    const viewsDir = '../site/templates/views/';
    const scanDirs = ['01-elements', '02-components'];

    var parsysContent = '';

    scanDirs.forEach(function(sd){

        const subDirs = fs.readdirSync(viewsDir + sd);

        subDirs.forEach(function(subDir){

            // ignore directories that start with an underscore (i.e. _parsys)

            if (subDir.substr(0, 1) !== '_') {
                parsysContent += "{{# has" + camelCaseify(subDir) + "}}\n\t{{> @" + subDir + "}}\n{{/ has" + camelCaseify(subDir) + "}}\n\n";
            }

            fs.writeFileSync(viewsDir + '01-elements/_parsys/parsys.mustache', parsysContent);
        });

    });

    done();
});

function camelCaseify (string) {

    const parts = string.split('-');
    var retVal = '';

    if (parts.length > 1) {
        parts.forEach(function(str){
            retVal += str.charAt(0).toUpperCase() + str.slice(1);
        });

        return retVal;

    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

}
