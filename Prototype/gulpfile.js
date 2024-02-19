'use strict';

const gulp         = require('gulp');
const fs           = require('fs');
const fractal      = require('./fractal.config.js');
const logger       = fractal.cli.console;
const less         = require('gulp-less');
const lessGlob     = require('gulp-less-glob');
const concat       = require('gulp-concat');
const plumber      = require('gulp-plumber');
const notify       = require('gulp-notify');
const inject       = require('gulp-inject-string');
const sourcemaps   = require('gulp-sourcemaps');


gulp.task('less',function() {
    return gulp.src([
        '../site/templates/public/css/main.less',
        '../site/templates/views/**/*.less',
        '../site/templates/public/vendor/glide/glide.core.min.css',
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
        '../site/templates/public/js/ElementHelper.js',
        '../site/templates/public/js/forms.js',
        '../site/templates/public/js/Globals.js',
        '../site/templates/views/**/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('temp.js'))
    .pipe(inject.wrap('document.addEventListener("DOMContentLoaded",function(){', '});'))
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
        '../site/templates/public/js/forms.js',
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


gulp.task('build-parsys', done => {
    const viewsDir = '../site/templates/views/';
    const scanDirs = ['01-elements', '02-components'];
    const ignoreDirs = [
        'footer',
        'header'
    ];

    let parsysContent = '';

    scanDirs.forEach(function(sd){
        const subDirs = fs.readdirSync(viewsDir + sd);

        subDirs.forEach(function(subDir){
            if (ignoreDirs.includes(subDir) || subDir.startsWith('_') || subDir.startsWith('.')) return;

            let camelCaseified = camelCaseify(subDir);

            parsysContent += `{{# ${camelCaseified} }}\n`;
            parsysContent += `\t{{> @${subDir} }}\n`;
            parsysContent += `{{/ ${camelCaseified} }}\n\n`;

            fs.writeFileSync(viewsDir + '01-elements/_parsys/parsys.mustache', parsysContent);
        });
    });

    done();
});

const camelCaseify = string => {
    const parts = string.split('-');
    let retVal = '';

    if (!parts.length > 1) return string;

    parts.forEach((str, index) => retVal += (index !== 0) ? str.charAt(0).toUpperCase()+str.slice(1) : str);

    return retVal;
}