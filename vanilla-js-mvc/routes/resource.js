// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

// Route for a single learning resource
router.get("/vanilla-js-mvc/:singleresourceid", function(req, res) {

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
  res.render("resource", {
    links: resourceLinks,
    pageTitle: req.params.singleresourceid

  });

});

// Export the router out
module.exports = router;