'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: 'black',
    // any other theme configuration values here
});

// tell Fractal to use the configured theme by default
fractal.web.theme(myCustomisedTheme);

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Fractal Starter Kit');

fractal.components.engine('@frctl/mustache'); // register the mustache engine adapter for your components
fractal.components.set('ext', '.mustache'); // look for files with a .mustache file extension

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', '../site/templates/views');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', '../site/templates/public');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Set the static HTML build destination
 */
fractal.web.set('builder.dest', path.join(__dirname, 'build'));

fractal.web.set('server.syncOptions', {
    open: true
});


