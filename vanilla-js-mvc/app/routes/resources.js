// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

router.get("/:resourceid", function(req, res) {

  // Require the resource data
  var

      // Get the data being stored in the Node request object
      requestData = req.app.get("resources"),

      // Create a temporary array for the resource links
      resourceLinks = [];

  // Loop thru requestData, which is an array.
  requestData.resources.forEach(function(item){
    if(item.href == req.params.resourceid) {
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