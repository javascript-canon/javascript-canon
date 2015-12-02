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
    SingleResourceView = {},

    // Create a view controller object for the homepage view
    SingleResourceController = {};


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
      var pageTarget = document.getElementById( "container-element" ),
          resourceContainer = document.createElement( "div" ),
          resourceHeader = document.createElement( "h2" ),
          resourceImage = document.createElement( "img" ),
          resourceAuthor = document.createElement( "h3" );

      resourceHeader.innerHTML = data[key].title;
      $( resourceImage ).attr("src", "/img/book-images/" + data[key].image_large);
      resourceAuthor.innerHTML =  "by " + data[key].author;

      resourceContainer.appendChild( resourceHeader );
      resourceContainer.appendChild( resourceImage );
      resourceContainer.appendChild( resourceAuthor );
      pageTarget.appendChild( resourceContainer );
      componentArray.push( resourceHeader );    
    }
    
    // Not needed now, but keep it for future reference
    // console.log( componentArray );

  });
   
   
}
SingleResourceView.render( resourcesData );
