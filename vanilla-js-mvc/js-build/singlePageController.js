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
    bookLink = $(".js-modal"),

    modal = document.getElementById("page-modal");

/*
 * "displaySinglePage()" method renders the model data that's
 * passed to view object's "openModal()" method. The "getData"
 * parameter represents the model data.
 */
SingleResourcePageController.displaySinglePage = function(getData) {
  return singlePageView.openModal(getData);
};


SingleResourcePageController.closeModal = function(getData) {
  return singlePageView.closeModal(getData);
};

/* Run the "displaySinglePage()" method & pass the model data as its
 * parameter, which is represented by the "singleResourceData"
 * variable defined above.
 */
$(bookLink).click(function() {
    SingleResourcePageController.displaySinglePage(singleResourceData);
});


// When the user clicks on the modal, close it
$("#page-modal").click(function(){
    SingleResourcePageController.closeModal(singleResourceData);
});