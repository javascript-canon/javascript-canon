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
    SingleResourceView = {};


/* "renderFirstPage()" method renders info for single resource 
 * component. The "model" parameter will represent whatever variable 
 * is storing the model data
 */
 SingleResourceView.renderFirstPage = function(model) {

  // Loop through the data to build elements
  for (var data in model) {

    // Perform standard hasOwnProperty() check
    if (model.hasOwnProperty(data)) {

      var pageTarget = document.getElementById("targetEl"),
          resourceContainer = document.createElement("article"),
          resourceTitle = document.createElement("h2"),
          resourceImage = document.createElement("img"),
          resourceAuthor = document.createElement("span"),
          buyBookButton = document.createElement("a"),
          modalButton = document.createElement("a"),
          getTitle, findLetterNumbersRegex, findMultipleWhitespaceRegex, cleanUpLink;

        /* Setting attributes one-by-one instead of using something
         * like $.attr(). You can say that this code isn't cool, but
         * it's certainly faster.
         *
         * Check this at: http://bit.ly/set-attribute-test
         */

      // Set attributes for the containing element
      resourceContainer.setAttribute("id", data);
      resourceContainer.setAttribute("class", "single-resource");
      resourceContainer.setAttribute("data-resource-type", model[data].type);

      /* Add the resource title to the inside of the <h2> and give it
       * a class
       */
      resourceTitle.innerHTML = model[data].title;
      resourceTitle.setAttribute("class", "resource-header");

      // Set attributes for the resource image
      resourceImage.setAttribute("src", "/img/book-images/" + model[data].image_large);
      resourceImage.setAttribute("class", "single-resource__book-image");

      /* Add the resource author to the inside of the <span> and 
       * give it a class
       */
      resourceAuthor.innerHTML =  "by " + model[data].author;
      resourceAuthor.setAttribute("class", "single-resource__author");

      /* Set attributes for the button that goes to the book's
       * Amazon page, then add text inside of it
       */
      buyBookButton.setAttribute("class", "single-resource__button js-book");
      buyBookButton.setAttribute("href", model[data].link);
      buyBookButton.innerHTML =  "Buy this book!";

      /* The button that opens the modal needs a hash link set as its
       * "href" attribute. Create that attribute by looking at the
       * resource's title property in the API, then restructuring it
       * with some regexes. Uses variables that were created above.
       */



        // Point to the title property in the API
        // getTitle = data[data].title;

        /* Build a regex that ignores words, spaces and dashes.
         * Meaning that it will point to special characters.
         */
        // findLetterNumbersRegex = /[^\w\s\-]/gi;

        // Build a regex that whitespace.
        // findMultipleWhitespaceRegex = /\s/g;

        /* Do the following in order:
         *
         * 1. delete any special characters from the title.
         * 2. replace any whitespace in the title with a "-".
         * 3. lowercase the title
         *
         * So "This title   is CALLED: foo" will look like
         * "this-title-is-called-foo"
         */
        // cleanUpLink = getTitle.replace(findLetterNumbersRegex, "").replace(findMultipleWhitespaceRegex, "-").toLowerCase();

        // Set the cleaned up link as the modal button's "href"
        // modalButton.setAttribute("data-link", cleanUpLink);

        /* Set attributes for the button that opens the modal, then
         * add text inside of it
         */
        modalButton.setAttribute("class", "single-resource__button js-modal");
        modalButton.setAttribute("data-resource-number", model[data].id);
        modalButton.innerHTML =  "Why it's good?";

        /* Arrange elements for an individual resource, then place the
         * resource on the page
         */
        resourceContainer.appendChild(resourceTitle);
        resourceTitle.appendChild(resourceAuthor);
        resourceContainer.appendChild(resourceImage);
        resourceContainer.appendChild(buyBookButton);
        resourceContainer.appendChild(modalButton);
        pageTarget.appendChild(resourceContainer);

      } //end hasOwnProperty() check

    } // end for...in loop

} // end "renderFirstPage()"

// Export the page view so it's available to the page controller
exports.SingleResourceView = SingleResourceView;