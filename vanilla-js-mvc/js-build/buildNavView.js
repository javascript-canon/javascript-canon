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
    resourcesData = Resources.ResourceModel,

    // "require" underscore library
    _ = require( "underscore" ),

    // "require" jQuery core
    $ = require( "jquery" );


SingleNavView.render = function() {

  return resourcesData.on( "value", function( snapshot ) {
      
      /*
       * Grab the Firebase data with a snapshot and store it in the
       * navData variable. Read more about this at:
       * http://bit.ly/firebase-snapshot
       */
      var navData = snapshot.val();
      var types = [], linkType;

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
      
    });
    
}

SingleNavView.render();

// Make ALL learning resources visible.
$( "#btn-show-all" ).click( function() {
  $( ".resource" ).css( "display", "block" );
});