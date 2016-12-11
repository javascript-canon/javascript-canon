// use strict mode
"use strict";

var

    // Make it easier to create REST APIs with Node & Express
    restful = require('node-restful'),

    // Make a Mongo-based/Mongoose-powered REST API
    mongoose = restful.mongoose;

// Model the Mongo-based/Mongoose-powered REST API
var resourceSchema = new mongoose.Schema({
  title: String,
  author: String,
  image: String,
  href : String,
  type: String,
  link: String,
  tags: String,
  about_text: String
});

// Export "resources" collection based on the above Schema
module.exports = restful.model('resources', resourceSchema);