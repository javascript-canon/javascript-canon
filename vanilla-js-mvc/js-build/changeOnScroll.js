/* ================================================================= */
/* | changeOnScroll.js                                               */
/* ============                                                      */
/* A generic file for scripts that don't have any real role in       */
/* the MVC code                                                      */
/*                                                                   */
/* http://bit.ly/cool-sticky-code                                    */
/* ================================================================= */

// use strict mode
"use strict";

var $ = require( "jquery" ),
    $nav = $( ".btn-container" ),
    navPosition = $nav.offset().top;

window.addEventListener( "scroll", function( event ) {

  var windowPositon = window.pageYOffset || document.documentElement.scrollTop;
    
  if ( windowPositon >= navPosition && document.documentElement.clientWidth >= 768 ) {
    $nav.addClass( "fixed-nav" );
  } else {
    $nav.removeClass( "fixed-nav" );
  }

});