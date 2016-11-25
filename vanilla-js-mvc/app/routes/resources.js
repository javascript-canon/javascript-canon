// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

router.get('/resources/', function(req, res) {
	
  res.render("resources");

});


// Export the router out
module.exports = router;