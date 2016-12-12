// use strict mode
"use strict";

var

    // Require the express module
    express = require("express"),

    // Create an express router
    router = express.Router(),

    // Get the resources model
    resources = require("../models/resources"),

    // Get the examples model
    examples = require("../models/examples");

// The GET route for the API data...the only thing needed right now


/* The GET routes for the both the "resources" and "examples" data in
 * the API...the only route needed right now.
 */
resources.methods('get');
examples.methods('get');

/* Return both routers
 * TODO: find out exactly what "register" does
 */
resources.register(router, "/resources");
examples.register(router, "/examples");


// Export the router out so it's available throughout the app
module.exports = router;