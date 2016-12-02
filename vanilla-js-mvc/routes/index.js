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

// Export the router out
module.exports = router;