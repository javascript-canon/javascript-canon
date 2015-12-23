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
 * GetElementHeight(): a constructor function
 */
 var GetElementHeight = function( element ) {
  this.element = element;
  return this;
}

/*
 * calculate(): a method attached to "GetElementHeight()" that gets an
 * element's TOTAL box model height by finding its height,
 * top/bottom margins, top/bottom borders, & top/bottom padding and 
 * then adding them altogether.  
 */
GetElementHeight.prototype.calculate = function() {
  
  /*
   * Grab the heights, margins, padding and borders. They all start 
   * off as strings so use parseInt() to convert them to numbers
   */
  var

      // get element height
      elementHeight = parseInt( $( this.element ).css( "height" ) ),

      // get element margins
      elementMarginTop = parseInt( $( this.element ).css( "marginTop" ) ),
      elementMarginBottom = parseInt( $( this.element ).css( "marginBottom" ) ),

      // get element borders
      elementBorderTop = parseInt( $( this.element ).css( "borderTopWidth" ) ),
      elementBorderBottom = parseInt( $( this.element ).css( "borderBottomWidth" ) ),

      // get element padding
      elementPaddingTop = parseInt( $( this.element ).css( "paddingTop" ) ),
      elementPaddingBottom = parseInt($( this.element ).css( "paddingBottom" ) );

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
        
        // the resulting sum needs to be returned...not sure why
        return arraySum;
      });

  // Make the height value available by returning it 
  return elementHeight;

  /*
   * A log statement that returns the targeted element. Not needed now 
   * but is useful at times.
   */
  // console.log("foo: " + this.element);
}

$( window ).on( "scroll touchmove", function () {
  var logoHeight = new GetElementHeight( "#logoEl" );
  console.log( logoHeight.calculate() );
});