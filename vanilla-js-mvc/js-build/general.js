/* ================================================================= */
/* | general.js                                                      */
/* ============                                                      */
/* A generic file  for scripts that don't have any real role in      */
/* the MVC code code                                                 */
/* ================================================================= */

// use strict mode
"use strict";

// "require" jQuery core
var $ = require( "jquery" );

/*
 * getElementHeight(): calculate an element's height by grabbing its 
 * height, top/bottom margins, top/bottom borders, & top/bottom
 * padding and then adding them altogether.  
 */
function getElementHeight( element ) {
  /*
   * Grab the heights, margins, padding and borders. They all start 
   * off as strings so use parseInt() to convert them to numbers
   */
  var

      // get element height
      elementHeight = parseInt( $( element ).css( "height" ) ),

      // get element margins
      elementMarginTop = parseInt( $( element ).css( "marginTop" ) ),
      elementMarginBottom = parseInt( $( element ).css( "marginBottom" ) ),

      // get element borders
      elementBorderTop = parseInt( $( element ).css( "borderTopWidth" ) ),
      elementBorderBottom = parseInt( $( element ).css( "borderBottomWidth" ) ),

      // get element padding
      elementPaddingTop = parseInt( $( element ).css( "paddingTop" ) ),
      elementPaddingBottom = parseInt($( element ).css( "paddingBottom" ) );

  // Place all the values in an array & add them together with reduce()
  var elementHeight = [
        elementHeight,
        elementMarginTop,
        elementMarginBottom,
        elementBorderTop,
        elementBorderBottom,
        elementPaddingTop,
        elementPaddingBottom
      ].reduce( function( a, b ) {
        var arraySum = a + b;
        return arraySum;
      });

  // Make the height value available by returning it 
  return elementHeight;
}

$( window ).on( "scroll touchmove", function () {
  var elHeight = getElementHeight( "#logoEl" );
  console.log( "elHeight is: " + elHeight )
});