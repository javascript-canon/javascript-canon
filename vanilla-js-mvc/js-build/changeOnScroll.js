/* ================================================================= */
/* | changeOnScroll.js                                               */
/* ============                                                      */
/* A generic file  for scripts that don't have any real role in      */
/* the MVC code code                                                 */
/* ================================================================= */

// use strict mode
"use strict";

var $ = require("jquery");

function init() {
  console.log($("nav").height());
  console.log($("nav").offset().top);
  window.addEventListener('scroll', function( e ) {

    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 150,
      header = document.querySelector( "#header" ),
      kai = $("nav").offset().top;
  
    if ( distanceY > shrinkOn ) {
      header.setAttribute( "style", "position:fixed" );
      $(".nav-class").css("margin-top", kai )
    } else {
      header.setAttribute( "style", "position:static" );
      $(".nav-class").css("margin-top", "0" )
    }

  });
}

window.onload = init();