/* ================================================================= */
/* | changeOnScroll.js                                               */
/* ===================                                               */
/* A generic file  for scripts that don"t have any real role in      */
/* the MVC code code                                                 */
/* ================================================================= */

// use strict mode
"use strict";

// "require" jQuery core
var $ = require( "jquery" );

// "require" jQuery core
var waypoints = require( "waypoints" );

var waypoint = new Waypoint({
  element: document.getElementById( "h1-text" ),
  handler: function( direction ) {
    alert( "You have scrolled to a thing" );
  }
})