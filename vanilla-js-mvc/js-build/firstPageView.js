/* ================================================================= */
/* | VIEW FOR THE FRONT PAGE                                         */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require("jquery"),

    // create a view object for the homepage view...export it out later
    SingleResourceView = {},

    targetEl = document.getElementById("targetEl");


/* "renderFirstPage()" method renders a single resource component. The
 * "model" parameter will represent whatever variable
 * is storing the model data, which will happen in the view's
 * controller.
 */
 SingleResourceView.renderFirstPage = function(model) {

  // Loop through the data to build elements
  for (var data in model) {

      /* Only run the for...in loop if it's a property of the object
       * AND the page has a "<div id='targetEl' />."
       */
       if (model.hasOwnProperty(data) && targetEl) {

      // Create single DOM elements for the component
      var pageTarget = targetEl,
          resourceContainer = document.createElement("article"),
          resourceTitle = document.createElement("h2"),
          resourceImage = document.createElement("img"),
          resourceAuthor = document.createElement("span"),
          buyBookButton = document.createElement("a"),
          pageLink = document.createElement("a");

      /* Setting attributes one-by-one instead of using something
       * like $.attr(). You can say that this code isn't cool, but it's
       * certainly faster.
       *
       * Check this at: http://bit.ly/set-attribute-test
       */

      // Set attributes for a single resource's containing element
      resourceContainer.setAttribute("id", data);
      resourceContainer.setAttribute("class", "single-resource");
      resourceContainer.setAttribute("data-resource-type", model[data].type);

      /* Add attributes to the resource's <h2> element and place the
       * resource's title inside of it.
       */
      resourceTitle.setAttribute("class", "single-resource__header");
      resourceTitle.innerHTML = model[data].title;

      // Set attributes for the resource image
      resourceImage.setAttribute("src", "/img/book-images/" + model[data].image);
      resourceImage.setAttribute("class", "single-resource__book-image");

      /* Add attributes to the resource's author element and place the
       * author's name inside of it.
       */
      resourceAuthor.setAttribute("class", "single-resource__author");
      resourceAuthor.innerHTML =  " &nbsp;by " + model[data].author;

      /* Set attributes for the button that goes to the book's
       * Amazon page, then add text inside of it
       */
      buyBookButton.setAttribute("class", "single-resource__button js-book");
      buyBookButton.setAttribute("href", model[data].link);
      buyBookButton.innerHTML =  "Get This!";

      /* Set attributes for the button that links to resource's page,
      * then add text inside of it
       */
      pageLink.setAttribute("class", "single-resource__button");
      pageLink.setAttribute("data-resource-number", model[data].id);
      pageLink.setAttribute("href", window.location.pathname + "/" + model[data].href);
      pageLink.innerHTML =  "Why it's good?";

      /* Arrange elements for an individual resource, then place the
       * resource on the page
       */
      resourceContainer.appendChild(resourceTitle);
      resourceTitle.appendChild(resourceAuthor);
      resourceContainer.appendChild(resourceImage);
      resourceContainer.appendChild(buyBookButton);
      resourceContainer.appendChild(pageLink);
      pageTarget.appendChild(resourceContainer);

    } // end hasOwnProperty() check

  } // end for...in loop

} // end "renderFirstPage()"

// Export the page view so it's available to the page controller
exports.SingleResourceView = SingleResourceView;