// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

router.get('/resources/', function(req, res) {
	
	// Require the resource data
	var data = req.app.get('resources');

	data.forEach(function(item) {
    console.log("item", item.id);
  });

	// Render the resource view with it's unique title
  res.render("resources", {
  	pageTitle: 'Resource'
  });

});


// Export the router out
module.exports = router;