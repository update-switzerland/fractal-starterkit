'use strict';

const path = require('path');
const fractal = module.exports = require('@frctl/fractal').create();

const mandelbrot = require('@frctl/mandelbrot');

const myCustomisedTheme = mandelbrot({
    skin: 'black',
    nav: ['components']
});

fractal.web.theme(myCustomisedTheme);

fractal.components.engine('@frctl/mustache'); // register the mustache engine adapter for your components
fractal.components.set('ext', '.mustache'); // look for files with a .mustache file extension

fractal.set('project.title', 'Fractal Starter Kit');

fractal.components.set('path', '../site/templates/views');
fractal.web.set('static.path', '../site/templates/public');
fractal.web.set('builder.dest', path.join(__dirname, 'build'));

fractal.web.set('server.syncOptions', {
    open: true
});


