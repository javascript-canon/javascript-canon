/* ================================================================= */
/* | VIEW FOR OPENING A SINGLE RESOURCE PAGE                         */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require( "jquery" ),

    // create view object for a single page view...export it out later
    SinglePageResourceView = {};

SinglePageResourceView.aboutTextArray = [];


/*
 * "openModal()" method for opening the modal on a single resource
 * page.
 */
SinglePageResourceView.openModal = function() {

  $("#page-modal").css("display", "block");
  setTimeout(function(){

    $(".page-modal__top-slide").addClass("move-up");
    $(".page-modal__bottom-slide").addClass("move-down");
    $("body").css("overflow-y", "hidden");
} ,200)

} // end "openModal()"


SinglePageResourceView.closeModal = function() {

  $("#page-modal").css("display", "none");
  $(".page-modal__top-slide").removeClass("move-up");
  $(".page-modal__bottom-slide").removeClass("move-down");
  $("body").css("overflow-y", "auto");

} // end "closeModal"

SinglePageResourceView.aboutTextArray = [];

SinglePageResourceView.buildAboutTextArray = function(data, callback) {

    // Grab the Heroku-powered model data
    var localArray = SinglePageResourceView.aboutTextArray;

    // Loop through the data to build elements
    for (var key in data) {

      // Perform standard hasOwnProperty() check
      if (data.hasOwnProperty(key)) {

        // Add the about text for all resources to the aboutTextArray
        localArray.push(data[key].about_text);
      }
    }

    // The callback param is either a callback or nothing if left blank
    this.callback = callback || null;

    return localArray;

} // end "addModalContent"

// Export the page view so it's available to the page controller
exports.SinglePageResourceView = SinglePageResourceView;