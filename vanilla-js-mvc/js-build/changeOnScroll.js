/* ================================================================= */
/* | changeOnScroll.js                                               */
/* ============                                                      */
/* A generic file for scripts that don't have any real role in      */
/* the MVC code code                                                 */
/*                                                                   */
/* http://bit.ly/cool-sticky-code                                    */
/* ================================================================= */

// use strict mode
"use strict";

var $ = require( "jquery" );

var addRemoveAnimation = function( animatedElement ){
  animatedElement.removeClass( "h1-animation" ).addClass( "h1-animation-back"); 
}

function init() {

  window.addEventListener( "scroll", function( event ) {

    var

        distanceY = window.pageYOffset || document.documentElement.scrollTop,
      
        shrinkOn = 150,

        header = document.querySelector( "#header" ),

        $h1 = $( "#h1-text" ),

        $nav = $( "nav" ),

        $navTopOffset = $nav.offset().top,

        $logo = $( "#logo" );
  
    if ( distanceY > shrinkOn ) {

      header.setAttribute( "style", "position:fixed" );

      $h1.addClass( "h1-animation" );

      $nav.css( "margin-top", $navTopOffset );

    } else {

      header.removeAttribute( "style" );

      $nav.attr( "style", "" );

      $h1.removeClass( "h1-animation" ).addClass( "h1-animation-back" ); 

    }

  });
}

window.onload = init();