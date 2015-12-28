/* ================================================================= */
/* | changeOnScroll.js                                               */
/* ============                                                      */
/* A generic file  for scripts that don't have any real role in      */
/* the MVC code code                                                 */
/*                                                                   */
/* http://bit.ly/cool-sticky-code                                    */
/* ================================================================= */

// use strict mode
"use strict";

var $ = require( "jquery" );

function init() {

  window.addEventListener( "scroll", function( e ) {

    var

        distanceY = window.pageYOffset || document.documentElement.scrollTop,
      
        shrinkOn = 150,

        header = document.querySelector( "#header" ),

        $h1 = $( "#h1-text" ),

        $nav = $( "nav" ),

        $navTopOffset = $nav.offset().top,

        $logo = $( "#logo" );
  
    if ( distanceY > shrinkOn ) {

      header.setAttribute( "class", "header-class" );

      $h1.addClass( "h1-animation" );

      $nav.css( "margin-top", $navTopOffset );

      $logo.attr( "style", "display:none" );

    } else {

      header.removeAttribute( "class"  );

      $h1.removeClass( "h1-animation" );

      $nav.attr( "style", "" );

      $logo.attr( "style", "" );

    }

  });
}

window.onload = init();