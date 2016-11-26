// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

router.get('/resources/:resourceid', function(req, res) {
	
	// Require the resource data
	var data = req.app.get('resources');
	var resource = data.resources[req.params.resourceid];
	
	res.send(`
    <h1>${resource.title}</h1>
  `);
console.log(resource);
	// Render the resource view with it's unique ids
  res.render("resources", {
  	pageTitle: 'Resources'
  });

});


// Export the router out
module.exports = router;