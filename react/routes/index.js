// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

/* Render the index template when going to the Vanilla JS MVC route
 * and set its <title> tag copy
 */
router.get("/vanilla-js-mvc", function(req, res) {
  res.render("index", {
    pageTitle: "Vanilla JS/MVC",
    canonical: "vanilla-js-mvc"
  });
});

// Export the router out
module.exports = router;