/* ================================================================= */
/* | changeOnScroll.js                                               */
/* ===================                                               */
/* A generic file  for scripts that don't have any real role in      */
/* the MVC code code                                                 */
/* ================================================================= */

// use strict mode
"use strict";

// "require" jQuery core
var

    // "require" jquery
    $ = require( "jquery" ),

    /*
     * "require" waypoints
     *
     * IMPORTANT: waypoints currently is NOT set up for CommonJS and
     * cannot be simple come in as a Node require() with out
     * the help of browserify-shim. Refer to its setup in package.json
     * & read more about all this at: http://bit.ly/waypoints-shimming.
     */
    waypoints = require( "waypoints" );

var waypoint = new Waypoint({
  element: document.getElementById( "h1-text" ),
  handler: function( direction ) {
    alert( "You have scrolled to a thing" );
  }
})