'use strict';

const gulp         = require('gulp');
const fractal      = require('./fractal.config.js');
const logger       = fractal.cli.console;
const less         = require('gulp-less');
const lessGlob     = require('gulp-less-glob');
const concat       = require('gulp-concat');
const rename       = require('gulp-rename');
const uglify       = require('gulp-uglify');
const plumber      = require('gulp-plumber');
const notify       = require('gulp-notify');
const sourcemaps   = require('gulp-sourcemaps');
const path         = require('path');


gulp.task('less',function() {
    return gulp.src([
        'public/css/main.less',
        'views/**/*.less'
    ])
    .pipe(sourcemaps.init())
    .pipe(customPlumber('Error running Less'))
    .pipe(concat('style_concat.less'))
    .pipe(gulp.dest('public/css'))
    .pipe(lessGlob())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'))
});


gulp.task('scripts', function() {
    return gulp.src([
        'public/vendor/**/*.js',
        'views/**/*.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'));
});


gulp.task('watch', function() {
    gulp.watch([
        'views/**/*.less',
        'public/**/*.less',
        '!public/css/style_concat.less'
        ], gulp.series('less'));
    gulp.watch([
        'views/vendor/**/*.js',
        'views/**/*.js',
         ], gulp.series('scripts'));
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


gulp.task('default', gulp.series('fractal:start', 'less', 'scripts', 'watch'));