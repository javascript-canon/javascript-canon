/* ================================================================= */
/* | CONTROLLER FOR A SINGLE RESOURCE PAGE                           */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require( "jquery" ),

    // reference to Heroku-powered model data
    modelData = require("./model").ResourceModel,

    // "require" the single page view module
    SinglePageView = require( "./singlePageView" ),

    // reference to the view object in the single page view module
    singlePageView = SinglePageView.SinglePageResourceView,

    // reference to the about text array in the single page view module
    aboutTextArray = singlePageView.aboutTextArray,

    // create a controller object for a single page view
    SingleResourcePageController = {};


/* "openModal()" method renders the model data that's
 * passed to view object's "openModal()" method. The "getData"
 * parameter represents the model data.
 */
SingleResourcePageController.openModal = function() {
  return singlePageView.openModal();
};

SingleResourcePageController.closeModal = function() {
  return singlePageView.closeModal();
};

SingleResourcePageController.buildAboutTextArray = function() {
  return singlePageView.buildAboutTextArray();
};


/* Run the "openModal()" method & pass the model data as its
 * parameter, which is represented by the "singleResourceData"
 * variable defined above.
 */
function buildModalContent(event) {

    var

        /* Get the numerical value of the clicked-on link's
         * "data-resource-number" attribute and subtract 1 from it.
         * This is done so the number matches the value of the article
         * array index.
         */
        resourceNumber = $(event.target).data("resourceNumber") - 1,

        /* Find the clicked-on link's parent element and look at all
         * its child elements.  Find the element that contains the
         * resource title
         */
        getResourceTitle = $(this).parents().children()[0].innerText,

        /* Remove all characters from the title that are not letters,
         * numbers, whitespace, dashes and full-colons.
         *
         * TODO: we're adding characters to the Regex manual...can
         * that be made to be dynamic?
         */
        cleanedUpResourceTitle = getResourceTitle.replace(/[^\w\s\-\:]/gi, '');

    // Build the article array
    // SingleResourcePageController.buildAboutTextArray();

    // // Open the modal
    // SingleResourcePageController.openModal();

    /* Look at the about text array and grab the link's respective
     * text into the modal. Subtracting 1 from "resourceNumber"
     * properly matches the array's 0-based index
     */
    document.querySelector(".js-modal-content").innerHTML = aboutTextArray[resourceNumber];

    // Add cleaned-up title to the modal element
    document.querySelector(".page-modal-element__title").innerHTML = cleanedUpResourceTitle;

};

$.getJSON(modelData).done(function(data) {
    $(".js-modal").on("click", function(){

        var defer = $.Deferred(),
            buildArray = singlePageView.buildAboutTextArray(data);

        // Let "createTypeLink" be the method that returns a promise
        defer.promise(buildArray);

        buildArray.done(
            SingleResourcePageController.openModal()
        )
    });
}); 

// When the user clicks on the modal's close button, close it
$(".page-modal-element__button").click(function(){
    SingleResourcePageController.closeModal();
});