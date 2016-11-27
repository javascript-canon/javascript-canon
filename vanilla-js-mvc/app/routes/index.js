// use strict mode
"use strict";

// Create a router
var router = require("express").Router();


// "index.js" loads the homepage when browser calls the index route
router.get("/", function(req, res) {

  // Render the index view with it's unique title
  res.render("index", {
    pageTitle: "The JavaScript Canon - Vanilla JS"
  });

});


// Export the router out
module.exports = router;