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
    singlePageView = require("./singlePageView").SinglePageResourceView,

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

SingleResourcePageController.buildAboutTextArray = function(data, callback) {
  return singlePageView.buildAboutTextArray(data, callback);
};


function buildModalContent(event, data) {
    
    var resourceNumber = $(event.target).data("resourceNumber") - 1,
        getTitle = $(event.target).parent().children()[0].innerHTML;

    SingleResourcePageController.buildAboutTextArray(data); 
    SingleResourcePageController.openModal();  

    document.querySelector(".js-modal-content").innerHTML = aboutTextArray[resourceNumber];

    document.querySelector(".page-modal-element__title").innerHTML = getTitle;

}

$.getJSON(modelData).done(function(data) {
    $(".js-modal").on("click", function(){
        buildModalContent(event, data);
    });
});



// When the user clicks on the modal's close button, close it
$(".page-modal-element__button").click(function(){
    SingleResourcePageController.closeModal();
});