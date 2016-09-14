/* ================================================================= */
/* | CONTROLLER FOR A SINGLE RESOURCE PAGE                           */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require( "jquery" ),

    // "require" the single page view module
    SinglePageView = require( "./singlePageView" ),

    // reference to Heroku-powered model data in the view
    singleResourceData = SinglePageView.singleResourceData,

    // reference to the view object in the single page view module
    singlePageView = SinglePageView.SinglePageResourceView,

    // create a controller object for a single page view
    SingleResourcePageController = {},

    // reference the single resource links
    bookLink = $(".book-link");

/*
 * "displaySinglePage()" method renders the model data that's
 * passed to view object's "render()" method. The "getData" parameter
 * represents the model data.
 */
SingleResourcePageController.displaySinglePage = function(getData) {
  return singlePageView.render(getData);
};

/*
 * Run the "displaySinglePage()" method & pass the model data as its
 * parameter, which is represented by the "singleResourceData"
 * variable defined above.
 */


$(bookLink).click(function(e) {
	e.preventDefault();
	SingleResourcePageController.displaySinglePage( singleResourceData );
});