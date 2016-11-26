// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

router.get("/resources/:resourceid", function(req, res) {
	
	// Require the resource data
	var

			// Get the data being stored in the Node request object
			requestData = req.app.get("resources"),
			resourceTitles = [];

	// Loop thru requestData, which is an array.
	requestData.resources.forEach(function(item){
		if(item.title == req.params.resourceid) {
			resourceTitles.push(item);	
		}
	});

	// Render the resource view with it's unique ids
  res.render("resources", {
  	pageTitle: "Resources",
  	titles: resourceTitles
  });

});


// Export the router out
module.exports = router;