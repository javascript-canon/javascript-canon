// use strict mode
"use strict";

var

    // Make it easier to create REST APIs with Node & Express
    restful = require('node-restful'),

    // Make a Mongo-based/Mongoose-powered REST API
    mongoose = restful.mongoose;

// Model "examples" data via a Mongo-based/Mongoose-powered REST API
var examplesSchema = new mongoose.Schema({
  name: Array
});

// Export "examples" collection based on the above Schema
module.exports = restful.model('examples', examplesSchema);