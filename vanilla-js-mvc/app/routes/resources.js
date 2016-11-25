// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

router.get('/resources/', function(req, res) {
	
	// Render the resource view with it's unique title
  res.render("resources", {
  	pageTitle: 'Resource',
  });

});


// Export the router out
module.exports = router;