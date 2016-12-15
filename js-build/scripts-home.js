// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require("jquery"),

    RSVP = require("RSVP"),

    // Create document fragment to batch load the data all at once
    documentFragment = document.createDocumentFragment(),

    // Point to the <ul> target where the examples links will load into
    ulTargetElement = document.getElementById("examples-target");

/* An IIFE that checks if <ul id="examples-target" /> is on the page.
 * If it is run the buildExampleList()...if not, just do a "return
 * false". This should only run on the home page.
 */
(function(){
  if(ulTargetElement) {
    return makeRequest();
  } else {
    return false;
  }
})();


/* Use Vanilla JS to AJAX in data after a Promise resolves. A simple
 * implementation I found here on S.O...I went with the simplest
 * example and I'm fine with that.
 *
 * S.O. Link
 * http://bit.ly/2hvEK5U
 */





function makeRequest(method, url) {
    return new Promise(
        function (resolve, reject) {
            const request = new XMLHttpRequest();
            request.onload = function () {
                if (this.status === 200) {
                    // Success
                    resolve(this.response);
                } else {
                    // Something went wrong (404 etc.)
                    reject(new Error(this.statusText));
                }
            };
            request.onerror = function () {
                reject(new Error(
                    'XMLHttpRequest Error: '+this.statusText));
            };
            request.open(method, url);
            request.send();
        });
}

// Example:

makeRequest('GET', '/api/resources')
.then(
    function (value) {
        console.log('Contents: ' + value);
    },
    function (reason) {
        console.error('Something went wrong', reason);
    });