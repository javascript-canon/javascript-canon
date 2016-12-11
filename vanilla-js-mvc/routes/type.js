// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

// Route for a single resource type
router.get("/vanilla-js-mvc/type/:typeid", function(req, res) {

  // Require the resource data
  var

      // Get the data already stored in the Node request object
      requestData = req.app.get("resources"),

      // Create a temporary array for the resource types
      resourceType = [];

  /* Loop thru requestData, which is an array. If the "type" value
   * matches the "typeid" passed the URL, add it to the "resourceType"
   * array.
   */
   requestData.forEach(function(item){
    if(item.type == req.params.typeid) {
      resourceType.push(item);
    }
  });

  /* Render the type view. Set the "resourceType" array to
   * "singleTypes" so views can access it to build out content. Set
   * "typeid" equal to properties that will be applied to both the page
   * <title> and the <h2> in the <section> tag.
   */
  res.render("type", {
    singleTypes: resourceType,
    pageTitle: req.params.typeid,
    typeTitle: req.params.typeid,
    canonical: "vanilla-js-mvc/type/" + req.params.typeid + "/"
  });

});

// Export the router out
module.exports = router;