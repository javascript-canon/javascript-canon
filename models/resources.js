// use strict mode
"use strict";

var

    // Make it easier to create REST APIs with Node & Express
    restful = require('node-restful'),

    // Make a Mongo-based/Mongoose-powered REST API
    mongoose = restful.mongoose;

// Model the resource data with a DB schema
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

/* Export the model and push updates based on this Schema to the
 * "resources" collection
 */
module.exports = restful.model('resources', resourceSchema);