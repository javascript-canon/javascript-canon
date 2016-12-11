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
resources.methods('get');

// The GET route for the API data...the only thing needed right now
examples.methods('get');

// return router
resources.register(router, "/resources");

// return router
examples.register(router, "/examples");

module.exports = router;