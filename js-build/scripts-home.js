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
    return getJSON();
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

function getJSON(url) {
  var promise = new RSVP.Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) { resolve(this.response); }
        else { reject(this); }
      }
    };
  });

  return promise;
};

getJSON("/api/resources").then(function(json) {
  console.log(json);
}).catch(function(error) {
  // handle errors
});