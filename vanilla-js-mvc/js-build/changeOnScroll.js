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
 * GetElementHeight(): a constructor function used for calculating an
 * element's total height
 */
 var GetElementHeight = function( element ) {
  this.element = element;
  return this;
}

/*
 * calculateHeight(): a method attached to the "GetElementHeight()" 
 * prototype that gets an element's TOTAL box model height by finding
 * its height, top/bottom margins, top/bottom borders,
 * top/bottom padding and then adding them altogether.  
 */
GetElementHeight.prototype.calculateHeight = function() {
  
  /*
   * Grab the heights, margins, padding and borders. They all start 
   * off as strings so convert them to numbers with parseInt()
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

  /*
   * Place all the values in an array & add them together with
   * reduce(). Attach the resulting sum to "this" so it's
   * readily available.
   */
  this.elementHeight = [
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
  return this;

} // end "GetElementHeight.prototype.calculateHeight()"


/*
 * ScrollCheck(): a constructor function that changes elements when
 * certain scroll points are hit and equal one another. 
 *
 * TODO!!!!!!!!!!!
 * ====================================================================
 * This needs to be made to more reusable but for now, do what "The
 * Practical Programmer" teaches us and treat it as "good enough
 * software."
 */

 function ScrollCheckLogo( setEl ) {

  /*
   * When "scroll" is called on a desktop/laptop, or "touchmove" is
   * called on a handheld, do whatever the callback function wants to
   *  do.
   */
  $( window ).on( "scroll touchmove", function() {

    var
      
        //Create a variable contains a new instance of parameter.
        findElement = new GetElementHeight( setEl ),
      
        // Create a variable that will soon store the element's height
        elementHeight,

        // Grab the window's scroll position
        getScrollPosition = window.scrollY;

    /*
     * Run the logo through "GetElementHeight.calculateHeight()", which
     * returns the element's total height...we'll need that in a moment
     */
    findElement.calculateHeight();

    // Put the returned height in the "elementHeight" variable
    elementHeight = findElement.elementHeight;

    /*
     * If the window's scroll position is greater than or equal to the
     * element's height, do stuff
     */
    if( getScrollPosition >= elementHeight ) {
      $( "#h1-text" ).addClass( "h1-sticky" );
    } else {
      if ( getScrollPosition < elementHeight ) {
        $( "#h1-text" ).removeClass( "h1-sticky" );
      }
    }

  });

}
/*
 * Create a new  instance of "ScrollCheckLogo" and pass the logo as a
 * parameter.
 */
var newScroll = new ScrollCheckLogo( "#logo" );