/* ================================================================= */
/* | VIEW FOR THE FRONT PAGE                                         */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

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


/* 
 * "render()" method" renders info for single resource component.
 * The "model" parameter will represent whatever variable is storing
 * the model data
 */
SingleResourceView.render = function( model ) {
  return resourcesData.on( "value", function( snapshot ) {
    var data = snapshot.val();
    console.log( data );
  });
}