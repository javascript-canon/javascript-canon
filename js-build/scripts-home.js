/*jslint node: true, strict: true */
/* globals window: true, document: true, window: true, XMLHttpRequest: true */

// use strict mode
"use strict";

var

  // "require" jQuery core
  $ = require("jquery"),

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

    // Create a standard AJAX request that gets the resources API
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/api/resources');

    // Give the API data a JSON header on page-load
    xhr.setRequestHeader("Accept", "application/json");

    /* On an AJAX load, if the data is there and there are multiple
     * choices to find the content (which there will be for some
     * reason), let the xhr's be what resolves the Promise.  Otherwise,
     * Send out the Promise's reject functionality.
     */
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    }; // end "xhr.onload"

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

makeRequest()
  .then(function (datums) {
    console.log(datums);
  }).catch(function(error) {
    console.error(error);
  });