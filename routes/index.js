// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

// HOME PAGE ROUTE: Render the index template when going to home page
router.get("/", function(req, res) {
  res.render("index", {
    pageID: "index"
  });
});

// Export the router out
module.exports = router;