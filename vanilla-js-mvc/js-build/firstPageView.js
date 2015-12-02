/* ================================================================= */
/* | VIEW FOR THE FRONT PAGE                                         */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var
    // "require" the model data so the view can access it
    Resources = require( "./model" ),

    // "require" jQuery core
    $ = require( "jquery" ),

    // reference to the data model
    resourcesData = Resources.ResourceModel,

    // create a view object for the homepage view...export it out later
    SingleResourceView = {};

/* 
 * "render()" method renders info for single resource component.
 * The "model" parameter will represent whatever variable is storing
 * the model data
 */
SingleResourceView.render = function( model ) {

  return resourcesData.on( "value", function( snapshot ) {

    var
        data, // will be a reference to the resource data on Firebase
        title, // will be a reference to all the resource data title
        image, // will be a reference to all the resource data image
        author, // will be a reference to all the resource data author
        componentArray = [];
        
    /*
     * Grab the Firebase data with a snapshot. Read more about this
     * at: http://bit.ly/firebase-snapshot
     */
    data = snapshot.val();

    // Loop through the Firebase data to build elements
    for ( var key in data ) {

      var pageTarget = document.getElementById( "container-element" ),
          resourceContainer = document.createElement( "div" ),
          resourceHeader = document.createElement( "h2" ),
          resourceImage = document.createElement( "img" ),
          resourceAuthor = document.createElement( "h3" );

      resourceHeader.innerHTML = data[key].title;
      $( resourceImage ).attr( "src", "/img/book-images/" + data[key].image_large );
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

// Export the view out so it's available to the controller
exports.SingleResourceView = SingleResourceView;

// Export the view out so it's available to the controller
exports.resourcesData = resourcesData;