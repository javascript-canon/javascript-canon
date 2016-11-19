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


/* "openModal()" method takes openModal method in the view code and 
 * adds it to the Controller object.
 */
 SingleResourcePageController.openModal = function() {
  return singlePageView.openModal();
};


/* "closeModal()" method takes closeModal method in the view code and 
 * adds it to the Controller object.
 */
 SingleResourcePageController.closeModal = function() {
  return singlePageView.closeModal();
};

/* "buildAboutTextArray()" method takes closeModal method in the view
 * code and adds it to the Controller object. Looks for data via the 
 * data parameter (which will be the resource API) and an optional 
 * callback.
 */
 SingleResourcePageController.buildAboutTextArray = function(data, callback) {
  return singlePageView.buildAboutTextArray(data, callback);
};

/* buildModalContent() builds the array with "about" text for, then
 * places both it and the resource's title into the modal.
 */
function buildModalContent(event, data) {

  var

      /* Get the numerical value of the clicked-on link's
       * "data-resource-number" attribute and subtract 1 from it. This
       * is done so the number matches the value of the article array
       * index.
       */
      resourceNumber = $(event.target).data("resourceNumber") - 1,

      /* Find the clicked-on link's parent element and look at all
       * its child elements.  Find the element that contains the
       * resource title
       */
      getTitle = $(event.target).parent().children()[0].innerHTML,

      /* Find the clicked-on link's parent element and look at all
       * its child elements.  Find the element that contains the
       * image
       */
      getImage = $(event.target).parent().children()[1].src,

      /* Short-hand reference to open the modal...do this so it's
       * easier read when it's passed as callback.
       */
      modalMethod = SingleResourcePageController.openModal();
  /* Build the about array based on the API model data, then open the 
   * modal via a callback
   */


  SingleResourcePageController.buildAboutTextArray(data, modalMethod); 

  /* Find the modal content container element and place it the 
   * respective  resource's "about" text in it. The resourceNumber 
   * will match the proper spot in the index since 1 was subtracted 
   * from it.
   */
  document.querySelector(".js-modal-content").innerHTML = aboutTextArray[resourceNumber];

  // Find the modal image element and set its src to the resource's src
  document.querySelector(".page-modal-element__img").src =  getImage;

  // Find the modal title element and place the title in it
  document.querySelector(".page-modal-element__title").innerHTML = getTitle;

}

/* AJAX in the model data...when it's ready build the modal with the
 * proper content.
 */
$.getJSON(modelData).done(function(data) {
  $(".js-modal").on("click", function(){
    buildModalContent(event, data);
  });
});

// When the user clicks on the modal's close button, close it
$(".page-modal-element__button").click(function(){
  SingleResourcePageController.closeModal();
});