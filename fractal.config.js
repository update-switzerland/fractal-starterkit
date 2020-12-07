'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Fractal Starter Kit');

fractal.components.engine('@frctl/mustache'); // register the mustache engine adapter for your components
fractal.components.set('ext', '.mustache'); // look for files with a .mustache file extension

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'views'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));


/*
 * Set the static HTML build destination
 */
fractal.web.set('builder.dest', path.join(__dirname, 'build'));

fractal.web.set('server.syncOptions', {
    open: true
});


