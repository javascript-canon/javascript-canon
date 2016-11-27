// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

// Route for a single learning resource
router.get("/type/:typeid", function(req, res) {

  // Require the resource data
  var

      // Get the data being stored in the Node request object
      requestData = req.app.get("resources"),

      // Create a temporary array for the resource links
      resourceType = [];

  // Loop thru requestData, which is an array.
  requestData.resources.forEach(function(item){
    if(item.type == req.params.typeid) {
      resourceType.push(item);
    }
  });

  // Render the resource view
  res.render("type", {
    pageTitle: "Resources",
    types: resourceType,
    typeTitle: req.params.typeid
  });

});
// Export the router out
module.exports = router;