// use strict mode
"use strict";

// Create a router
var router = require("express").Router();


// "index.js" loads the homepage when browser calles the index route
router.get("/", function(req, res) {

  res.render("index");

});


// Export the router out
module.exports = router;