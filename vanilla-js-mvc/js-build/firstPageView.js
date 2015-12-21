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
        componentArray = [];

    /*
     * Grab the Firebase data with a snapshot and store it in the data
     * variable. Read more about this at:
     * http://bit.ly/firebase-snapshot
     */
    data = snapshot.val();

    // Loop through the Firebase data to build elements
    for ( var key in data ) {

      var pageTarget = document.getElementById( "targetEl" ),
          resourceContainer = document.createElement( "article" ),
          resourceTitle = document.createElement( "h2" ),
          resourceImage = document.createElement( "img" ),
          resourceAuthor = document.createElement( "h3" ),
          resourceLink = document.createElement( "a" );

      /*
       * Setting attributes one-by-one instead of using something like 
       * $.attr(). You can say that this code isn't cool, but it's 
       * certainly faster.
       *
       * Check this at: http://bit.ly/set-attribute-test
       */
     
      // Set attributes for the containing element
      resourceContainer.setAttribute("class", "col-md-4 panel panel-default single-resource");
      resourceContainer.setAttribute("data-resource-type", data[key].type);

      // Add the resource title to the inside of the <h2>
      //resourceTitle.innerHTML = data[key].title;

      resourceTitle.setAttribute("class", "gl-subheader");

      // Set attributes for the resource image
      resourceImage.setAttribute( "src", "/img/book-images/" + data[key].image_large );
      resourceImage.setAttribute( "class", "book-image" );

      // Add the resource author to the inside of the <h3>
      resourceAuthor.innerHTML =  "by " + data[key].author;

      // Set attributes for the link, then add the title inside of it
      resourceLink.setAttribute("href", data[key].link);
      resourceLink.setAttribute("class", "book-link");
      resourceLink.innerHTML = data[key].title + " &raquo;";

      /*
       * Arrange elements for an individual resource, then place it on
       * the page
       */

      resourceTitle.appendChild( resourceLink );
      resourceContainer.appendChild( resourceTitle );
      resourceContainer.appendChild( resourceImage );
      resourceContainer.appendChild( resourceAuthor );
      pageTarget.appendChild( resourceContainer );
      componentArray.push( resourceContainer );

    }
    
    // Not needed now, but keep it for future reference
    // console.log( componentArray );

  });
   
}


// Export the page data so it's available to the page controller
exports.resourcesData = resourcesData;

// Export the page view so it's available to the page controller
exports.SingleResourceView = SingleResourceView;