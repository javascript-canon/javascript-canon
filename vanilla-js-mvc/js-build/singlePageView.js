/* ================================================================= */
/* | VIEW FOR OPENING A SINGLE RESOURCE PAGE                         */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require( "jquery" ),

    // "require" the model data module so the view can access it
    Resources = require( "./model" ),

    // reference to the data model in the "Resources" module
    singleResourceData = Resources.ResourceModel,

    // create view object for a single page view...export it out later
    SinglePageResourceView = {};

/*
 * "openModal()" method for opening the modal on a single resource
 * page.
 */
SinglePageResourceView.openModal = function(singleResourceData) {

  $("#page-modal").css("display", "block");
  setTimeout(function(){
    $(".page-modal__top-slide").addClass("move-up");
    $(".page-modal__bottom-slide").addClass("move-down");
} ,200)

} // end "openModal()"


SinglePageResourceView.closeModal = function(singleResourceData) {

  $("#page-modal").css("display", "none");

} // end "closeModal"


// Export the page data so it's available to the page controller
exports.singleResourceData = singleResourceData;

// Export the page view so it's available to the page controller
exports.SinglePageResourceView = SinglePageResourceView;