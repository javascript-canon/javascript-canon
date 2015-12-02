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

    var
        data, // the resource data
        title,
        image,
        author,
        componentArray = [];
        
    data = snapshot.val();

    for ( var key in data ) {
      var pageTarget = document.getElementById( "container" ),resourceContainer = document.createElement( "div" ),
        resourceHeader = document.createElement( "h2" );

      resourceHeader.innerHTML = data[key].title;
      pageTarget.appendChild( resourceHeader );
      componentArray.push( resourceHeader );    
    }
    
    // Not needed now, but keep it for future reference
    // console.log( componentArray );

  });
   
   
}
SingleResourceView.render( resourcesData );
