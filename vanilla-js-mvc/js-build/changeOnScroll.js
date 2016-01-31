/* ================================================================= */
/* | changeOnScroll.js                                               */
/* ============                                                      */
/* A generic file for scripts that don't have any real role in       */
/* the MVC code code                                                 */
/*                                                                   */
/* http://bit.ly/cool-sticky-code                                    */
/* ================================================================= */

// use strict mode
"use strict";

var $ = require( "jquery" ),
    $nav = $( ".btn-container" ),
    navPos = $nav.offset().top;

window.addEventListener( "scroll", function( event ) {

  var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    
  if ( distanceY >= navPos ) {
    $nav.addClass( "fixed-nav" );
  } else {
    $nav.removeClass( "fixed-nav" );
  }

});

/*
var addRemoveAnimation = function( animatedElement ){
  animatedElement.removeClass( "h1-animation" ).addClass( "h1-animation-back"); 
}

function init() {

  window.addEventListener( "scroll", function( event ) {

    var

        distanceY = window.pageYOffset || document.documentElement.scrollTop,
      
        shrinkOn = 150,

        $h1 = $( "#h1-text" ),

        $nav = $( "nav" ),

        $navTopOffset = $nav.offset().top,

        $logo = $( "#logo" );
  
    if ( distanceY > shrinkOn ) {

      $h1.addClass( "h1-animation" );

      $nav.css( "margin-top", $navTopOffset );

    } else {

      $nav.attr( "style", "" );

      $h1.removeClass( "h1-animation" ).addClass( "h1-animation-back" ); 

    }

  });
}

window.onload = init();
*/