// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require("jquery"),

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
    return buildExampleList();
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
function buildExampleListTwo(method, url) {

  return new Promise(function (resolve, reject) {
    var exampleList = new XMLHttpRequest();
    exampleList.open(method, url);
    exampleList.onload = resolve;
    exampleList.onerror = reject;
    exampleList.send();
  });

} // end 'buildExampleListTwo()'

buildExampleListTwo('GET', '/api/examples')
  .then(function (e) {
    console.log(e.target.response);
  }, function (e) {
    // handle errors
  });



/* buildExampleList(): look at the examples listed at "/api/examples"
 * and places them on the home page. This should only run on the home
 * page.
 */
function buildExampleList() {

  // Wait for the API to ge AJAX'd in, then do stuff
  $.getJSON("/api/examples").done(function(exampleData) {

    /* Point to the object that contains the examples...kind of a hack
     * for Mongo
     */
    var examples = exampleData[0];

    // Loop through the examples with a for...in loop
    for(var singleExample in examples) {

      /* Only run the for...in loop if it's a property of the object
       * AND the property key id NOT "_id". Another Mongo-based hack
       * since Mongo inserts this property by default and there
       * currently isn't a really good way to remove it.
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

  }); // end $.getJSON()

} //end buildExampleList()