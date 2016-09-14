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
 * "openModal()" method openModals info for single resource component.
 * The "model" parameter will represent whatever variable is storing
 * the model data
 */
SinglePageResourceView.openModal = function(singleResourceData) {

		$("#page-modal").css("display", "block");

} // end "openModal()"


// Export the page data so it's available to the page controller
exports.singleResourceData = singleResourceData;

// Export the page view so it's available to the page controller
exports.SinglePageResourceView = SinglePageResourceView;