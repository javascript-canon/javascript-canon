/*jslint node: true, strict: true */
/* globals window: true, document: true, window: true, XMLHttpRequest: true */

// use strict mode
"use strict";

var

  // Require RSVP to polyfill Promise support...for IE mostly
  RSVP = require("RSVP"),

  /* Use Promises if there's native browser support for them...use
   * RSVP if there isn't
   */
   Promise = window.Promise ||  RSVP.Promise,

  // Create a document fragment to batch load the data all at once
   documentFragment = document.createDocumentFragment(),

  // Point to the <ul> target where the examples links will load into
  ulTargetElement = document.getElementById("examples-target");

/* An IIFE that checks if <ul id="examples-target" /> is on the page.
 * If it is run the buildExampleList()...if not, just do a "return
 * false". This should ONLY run on the home page.
 */
(function(){
  if(ulTargetElement) {
    return makeRequest();
  } else {
    return false;
  }
})();

/* Use Vanilla JS to AJAX in data after a Promise resolves. A simple
 * implementation I found on Stack Overflow at: http://bit.ly/2hvEK5U.
 */
function makeRequest() {

  // Create a Promise instance that does a standard resolve/reject
  return new Promise(function (resolve, reject) {

    // Create an AJAX request that gets the JS Canon Examples API
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/api/examples');

    // Give the API data a JSON header on page-load
    xhr.setRequestHeader("Accept", "application/json");

    /* On an AJAX load, if the data is there and there are multiple
     * choices to find the content (which there will be for some
     * reason), let the xhr's be what resolves the Promise.  Otherwise,
     * Send out the Promise's reject functionality.
     */
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    }; // end "xhr.onload"

    /* On an AJAX error, do the Promise reject stuff and set up a
     * status message.
     */
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    }; // end "xhr.onerror"

    // Send out the data so it's available to our code
    xhr.send();

  }); // End the Promise return

}



/* buildExampleList(): look at the examples listed at "/api/examples"
 * and places them on the home page. This should only run on the home
 * page.
 */
function buildExampleList(examples) {

  // Loop through the examples with a for...in loop
  for(var singleExample in examples) {

    /* Only run the for...in loop if it's a property of the object AND
     * the property key id NOT "_id". Another Mongo-based hack since
     * Mongo inserts this property by default and there
     * ~currently~ isn't a really good way to remove it.
     */
    if(examples.hasOwnProperty(singleExample) && singleExample != "_id") {

      // Dynamically create an <li> and <a> tag
      var exampleItem = document.createElement("li"),
          exampleLink = document.createElement("a");

      // Place the text in the object key inside the <a> tag
      exampleLink.innerHTML = singleExample;

      // Set the <a> tag's href attribute
      exampleLink.setAttribute("href", "/" + examples[singleExample]);

      // Set the <li> tag's class attribute
      exampleItem.setAttribute("class", "examples__list-item");

      // Place the <a> tag inside the <li> tag
      exampleItem.appendChild(exampleLink);

      // Place <li> with all content inside the document fragment
      documentFragment.appendChild(exampleItem);

      // Place the document fragment in the <ul> on the homepage
      ulTargetElement.appendChild(documentFragment);

    } // end hasOwnProperty() check

  }  // end for...in loop

} //end buildExampleList()

/* Request the data using the above method...if it fails, it will be
 * caught and send an error message to the console
 */
makeRequest()
  .then(function (examples) {
    buildExampleList(examples[0]);
  }).catch(function(error) {
    console.error(error);
  });