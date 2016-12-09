// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

// Route for a single resource
router.get("/vanilla-js-mvc/:singleresourceid", function(req, res) {

  // Require the resource data
  var

      // Get the data already stored in the Node request object
      requestData = req.app.get("resources"),

      // Create a temporary array for the resource links
      resourceLinks = [];

  /* Loop thru requestData, which is an array. If the "href" value
   * matches the "singleresourceid" passed the URL, add it to the
   * "resourceLinks" array.
   */
  requestData.forEach(function(item){
    if(item.href == req.params.singleresourceid) {
      resourceLinks.push(item);
    }
  });

  /* Render the resource view. Set the "resourceLinks" array to
   * "links" so views can access it to build out content. Set
   * "singleresourceid" equal to properties that will be applied to
   * both the page <title>.
   */
  res.render("resource", {
    links: resourceLinks,
    pageTitle: req.params.singleresourceid,
    canonical: "vanilla-js-mvc/" + req.params.singleresourceid + "/"
  });

});

// Export the router out
module.exports = router;