// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

// Render the index template when going to the Vanilla JS MVC route
router.get("/vanilla-js-mvc", function(req, res) {
  res.render("index", {
    pageTitle: "The JavaScript Canon - Vanilla JS"
  });
});

// Route for a single learning resource
router.get("/:singleresourceid", function(req, res) {

  // Require the resource data
  var

      // Get the data being stored in the Node request object
      requestData = req.app.get("resources"),

      // Create a temporary array for the resource links
      resourceLinks = [];

  // Loop thru requestData, which is an array.
  requestData.forEach(function(item){
    if(item.href == req.params.singleresourceid) {
      resourceLinks.push(item);
    }
  });

  // Render the resource view
  res.render("resources", {
    pageTitle: "Resources",
    links: resourceLinks
  });

});


// Export the router out
module.exports = router;