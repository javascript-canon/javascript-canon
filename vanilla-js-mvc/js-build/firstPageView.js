/* ================================================================= */
/* | VIEW FOR THE FRONT PAGE                                         */
/* ================================================================= */

// use strict mode
"use strict";

var
    // "require" the model data
    Resources = require( "./model" ),

    // "require" jQuery core
    $ = require( "jquery" ),

    // create a short-hand reference to the data model
    resourcesData = Resources.ResourceModel,

    // Create a view object for the homepage view
    SingleResourceView = {};


// "render()" method" renders info for single resource component
SingleResourceView.render = function() {
  return resourcesData.on( "value", function( snapshot ) {
    var data = snapshot.val();
    console.log( data );
  });
}