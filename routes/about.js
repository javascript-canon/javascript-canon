// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

// ABOUT PAGE ROUTE: Render the about template when going to about page
router.get("/about", function(req, res) {
  res.render("about", {
    pageID: "about",
    canonical: "about"
  });
});

// Export the router out
module.exports = router;