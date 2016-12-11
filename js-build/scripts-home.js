// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require("jquery"),

    // Create document fragment to batch load the data all at once
    documentFragment = document.createDocumentFragment(),

    // Point to the <ul> target where the examples links will load into
    ulTargetElement = document.getElementById("examples-target");

(function(){
  if(ulTargetElement) {
    return buildExampleList();
  } else {
    return false;
  }
})();

function buildExampleList() {

  $.getJSON("/api/examples").done(function(exampleData) {

    var examples =  exampleData[0];

    for(var singleExample in examples) {

      // Perform standard hasOwnProperty() check
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