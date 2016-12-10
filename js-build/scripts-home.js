// use strict mode
"use strict";

var

  $ = require("jquery"),

  // Example data
  examples = {
    "Vanilla JS MVC": "vanilla-js-mvc",
    "React": "react",
    "Backbone.js": "backbone"
  },

  // Create document fragment to batch load the data all at once
  documentFragment = document.createDocumentFragment(),

  // Point to the <ul> target where the examples links will load into
  ulTargetElement = document.getElementById("examples-target");


// Get the Resources API frpm mLab
$.getJSON("./api/resources").done(function(data) {
  console.log("data is now: ", data);
});

// Loop through the example data and place it on the home page
for(var singleExample in examples) {

  // Perform standard hasOwnProperty() check
  if (examples.hasOwnProperty(singleExample)) {

    // Dynamically create an <li> and <a> tag
    var exampleItem = document.createElement("li"),
        exampleLink = document.createElement("a");

    // Add the text in the object key to the inside of the <a> tag
    exampleLink.innerHTML = singleExample;

    // Set the <a> tag's href attribute
    exampleLink.setAttribute("href", "/" + examples[singleExample]);

    // Set the <li> tag's class attribute
    exampleItem.setAttribute("class", "examples__list-item");

    // Place the <a> tag inside the <li> tag
    exampleItem.appendChild(exampleLink);

    // Place the <li> and all its content inside the document fragment
    documentFragment.appendChild(exampleItem);

    // Load the document fragment inside the <ul> on the homepage
    ulTargetElement.appendChild(documentFragment);

  } // end hasOwnProperty() check

}  // end for...in loop