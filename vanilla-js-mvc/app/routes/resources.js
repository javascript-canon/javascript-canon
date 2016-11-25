// use strict mode
"use strict";

// Create a router
var router = require("express").Router();

router.get('/resources/:resourceid', function(req, res) {
	
  res.send(`
      <h1>foo</h1>
  `);

});


// Export the router out
module.exports = router;