// use strict mode
"use strict";

var

    // Require the express module
    express = require("express"),

    // Create an express router
    router = express.Router(),

    // Get the resources model
    resources = require("../models/resources");

// The GET route for the API data...the only thing needed right now
resources.methods('get');

// return router
resources.register(router, "/resources");

module.exports = router;