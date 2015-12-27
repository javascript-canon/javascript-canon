/* ================================================================= */
/* | VIEW FOR THE SHOW/HIDE RESOURCE BUTTONS                         */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" the model data so the view can access it
    Resources = require( "./model" ),

    SingleNavView = {},

    // reference to the data model in the "Resources" module
    navModelData = Resources.ResourceModel,

    // "require" underscore library
    _ = require( "underscore" ),

    // "require" jQuery core
    $ = require( "jquery" );

/*
 * This console.log statement will be removed after it's confirmed
 * that views can access the model data.
 */
console.log( navModelData );
SingleNavView.render = function() {

  return navModelData.on( "value", function( snapshot ) {
      
      /*
       * Grab the Firebase data with a snapshot and store it in the
       * navData variable. Read more about this at:
       * http://bit.ly/firebase-snapshot
       */
      var navData = snapshot.val(),
          types = [],
          linkType,
          createTypeLink;

      // Loop through the Firebase data to build the nav
      for ( var key in navData ) {

        // Do standard hasOwnProperty() check against "navData" object
        if( navData.hasOwnProperty( key ) ) {

          // Get all the resource types & add them to the "types" array
          types.push( navData[key].type );

        } // end hasOwnProperty() check
        
      } // end for...in loop

      /*
       * The "types" array contains duplicate items at this point.
       * Remove the duplicate items with underscore's "uniq" method
       * Store the resulting array in a new array with a variable name
       * of "linkType".
       */
      linkType = _.uniq( types );

      createTypeLink = $.each( linkType, function( index, value ) {
        var
            btnId,
            btnLink,
            btnTargetEl;

      btnTargetEl = document.querySelector( "nav" );
      btnLink = document.createElement( "button" );
      btnId = value + "-id";
      btnLink.innerHTML = value.charAt( 0 ).toUpperCase() + value.slice( 1 );
      btnLink.setAttribute( "id", btnId );
      $( btnLink ).addClass( "btn btn-default btn-resource" ).attr( "data-link-type", value );
      btnTargetEl.appendChild( btnLink );
    });

    // USE JQUERY PROMISES
    //==================================================================
    // Firebase conflicts with jQuery when buttons are clicked
    // Clicking on them yields an error because they're not DOM-ready
    // Use $.Deferred, $.promise(), and $.done() to prevent this
    var defer = $.Deferred();
    defer.promise( createTypeLink );
    createTypeLink.done(

      // Do things after ".done()" confirms that the buttons are ready
      $( ".btn-resource" ).click(function(){

        // Single var pattern
        var getLinkType, getElType, getElNotType;

        // The ".btn" data-link-type value gets stored in getLinkType
        // Data attributes don't work in IE 10 and lower
        // Feature-detect if the browser supports the dataset property
        // If it doesn't, use the getAttribute method instead
        if( !this.dataset ) { // If < = IE10
          getLinkType = this.getAttribute( "data-link-type" );
        } else { // For other browsers
          getLinkType = this.dataset.linkType;
        }

        // The ".btn" data-link-type val matches data-resource-type val
        // Store items with matching data-resource-type in getElType
        getElType = $( "article[data-resource-type*="+getLinkType+"]" );

        // Store non-matching data-resource-type items in getElNotType
        getElNotType = $( "article:not( [data-resource-type*="+getLinkType+"] )" );

        // Find page elements with the ".resource" class
        // Let $.filter() show matching elements, hide non-matching ones
        $( ".single-resource" ).filter( getElNotType ).css( "display", "none" );
        $( ".single-resource" ).filter( getElType ).css( "display", "block" );
      })
    );

  }); // end returned "navModelData.on"
    
}

// Make ALL learning resources visible.
$( "#btn-show-all" ).click( function() {
  $( ".single-resource" ).css( "display", "block" );
});

// Export the nav data so it's available to the nav controller
exports.navModelData = navModelData;

// Export the nav view so it's available to the nav controller
exports.SingleNavView = SingleNavView;