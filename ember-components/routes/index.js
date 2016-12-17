// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

/* Render the index template when going to the Vanilla JS MVC route
 * and set its <title> tag copy
 */
router.get("/ember-components", function(req, res) {
  res.render("index", {
    pageTitle: "Ember Components",
    canonical: "ember-components"
  });
});

// Export the router out
module.exports = router;