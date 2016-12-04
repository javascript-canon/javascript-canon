// use strict mode
"use strict";

var

  // Example data
  examples = {
    "Vanilla JS MVC": "vanilla-js-mvc",
    "React": "react",
    "Backbone.js": "backbone"
  },

  // Create document fragment to batch load the data all at once
  documentFragment = document.createDocumentFragment(),

  // Define the area where the examples links will load into
  targetElement = document.getElementById("examples");


// Loop through the example data and place it on the home page
for(var singleExample in examples) {

  // Perform standard hasOwnProperty() check
  if (examples.hasOwnProperty(singleExample)) {

    var exampleItem = document.createElement("li"),
        exampleLink = document.createElement("a");

    exampleLink.innerHTML = singleExample;

    exampleLink.setAttribute("href", "/" + examples[singleExample] + "/");

    exampleItem.appendChild(exampleLink);

    documentFragment.appendChild(exampleItem);

    targetElement.appendChild(documentFragment);

  } // end hasOwnProperty() check

}  // end for...in loop