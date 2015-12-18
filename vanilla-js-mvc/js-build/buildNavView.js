// use strict mode
"use strict";

var

    // "require" the model data so the view can access it
    Resources = require( "./model" ),

    // reference to the data model in the "Resources" module
    resourcesData = Resources.ResourceModel,

    // "require" jQuery core
    $ = require( "jquery" );


function buildNav() {
    return resourcesData.on( "value", function( snapshot ) {
      
    /*
     * Grab the Firebase data with a snapshot and store it in the data
     * variable. Read more about this at:
     * http://bit.ly/firebase-snapshot
     */
      var data = snapshot.val();


    });

}

// Make ALL learning resources visible.
$( "#btn-show-all" ).click( function() {
  $( ".resource" ).css( "display", "block" );
});