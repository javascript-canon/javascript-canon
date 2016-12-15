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

// An array that will hold the "about" text for each resource
SinglePageResourceView.aboutTextArray = [];

/* "openModal()" method for opening the modal and displaying a single
 * resource page.
 */
 SinglePageResourceView.openModal = function() {

  // Page modal is hidden...show it
  $("#page-modal-element").css("display", "block");

  /* Wait 200 milliseconds, move 2 separate slide elements
   * respectively up & down to show content, and remove the vertical
   * scrollbar.
   */
  setTimeout(function(){

    $(".page-modal__top-slide").addClass("page-modal__slide--moveUp");
    $(".page-modal__bottom-slide").addClass("page-modal__slide--moveDown");
    $("body").css("overflow-y", "scroll");

  }, 200);

} // end "openModal()"

/* "closeModal()" method for opening the modal and displaying a single
 * resource page.
 */
SinglePageResourceView.closeModal = function() {

  // Page modal is visible...hide it
  $("#page-modal-element").css("display", "none");

  /* Reset the slides by removing the animation classes and show the
   * vertical scrollbar.
   */
   $(".page-modal__top-slide").removeClass("page-modal__slide--moveUp");
   $(".page-modal__bottom-slide").removeClass("page-modal__slide--moveDown");
   $("body").css("overflow-y", "auto");

} // end "closeModal"

/* "buildAboutTextArray()" method for finding the the "about" text for
 * each resource and adding it to an array.
 */
SinglePageResourceView.buildAboutTextArray = function(model, callback) {

    /* The callback param is optional so if it's not set, let it be an
     * empty function
     */
    this.callback = callback || function () {};

    // Grab the Heroku-powered model data
    var localArray = SinglePageResourceView.aboutTextArray;

    // Loop through the data to build elements
    for (var data in model) {

      // Perform standard hasOwnProperty() check
      if (model.hasOwnProperty(data)) {

        // Add the about text for all resources to the aboutTextArray
        localArray.push(model[data].about_text);
      }
    }

    // Make the array accessible
    return localArray;

} // end "buildAboutTextArray"

// Export the page view so it's available to the page controller
exports.SinglePageResourceView = SinglePageResourceView;