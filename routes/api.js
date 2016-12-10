// use strict mode
"use strict";

var

    // Require the express module
    express = require("express"),

    // Create an express router
    router = express.Router(),

    // Get the resources model
    resources = require("../models/resources");

// CRUD-like routes for the model data
resources.methods([
  'get',
  'post',
  'put',
  'delete'
]);

// return router
resources.register(router, "/resources");
module.exports = router;