// use strict mode
"use strict";

var

    // Bring in express
    express = require("express"),

    // Bring in underscore
    _ = require("underscore"),

    // Create "app" & export it out so the root "app.js" can access it
    app = module.exports = express(),

    // Point to the resource JSON data
    resourceData = require(__dirname + "/data/resources.json");


/*
 * =============================
 * START LOCAL VARIABLE SETTINGS
 * =============================
 */

// An example's site title
app.locals.exampleSiteTitle = "Vanilla JC MVC";

// An example's URL
app.locals.exampleURL = "vanilla-js-mvc";


// buildTypeNavigation(): builds the main nav that lists resource types
function buildTypeNavigation() {

  var

      // Array that will contain a list of resource types
      getTypes = [],

      // Array that will contain a list of filtered resource types
      linkType;

  // Loop through the model data to build the nav
  for (var data in resourceData) {

    // Do a standard hasOwnProperty() check against the model
    if(resourceData.hasOwnProperty(data)) {

      // Get "types" in the JSON & add them to the "getTypes" array
      getTypes.push(resourceData[data].type);

    } // end hasOwnProperty() check

  } // end for...in loop

  /* The "getTypes" array contains duplicate items at this point.
   * Remove them with underscore's "uniq" method, store the results in
   * a new array and assign it to the "linkType" variable.
   */
   linkType = _.uniq(getTypes);

   // Assign "linkType" to a local express variable called "types"
   return app.locals.types = linkType;

 }

// Run the function
buildTypeNavigation();

/*
 * ============================
 * STOP LOCAL VARIABLE SETTINGS
 * ============================
 */



/*
 * ==================
 * START APP SETTINGS
 * ==================
 */

// Set a pointer the resource data
app.set("resources", resourceData);

// Point to views in the local folder
app.set("views", __dirname + "/views");

// Set the view engine to be EJS
app.set("view engine", "ejs");

/*
 * =================
 * STOP APP SETTINGS
 * =================
 */



/*
 * ================
 * CONFIGURE ROUTES
 * ================
 */

// An example's home page route
app.use(require('./routes/index'));

// Type routes...books, classes, etc.
app.use(require('./routes/type'));


/*
 * =========================
 * START MIDDLEWARE SETTINGS
 * =========================
 */

 // grab asset files...images, .css, .js, etc.
 app.use(express.static(__dirname + "/public/"));

/*
 * ========================
 * STOP MIDDLEWARE SETTINGS
 * ========================
 */


// Route for a single learning resource
app.get("/vanilla-js-mvc/:singleresourceid", function(req, res) {

  // Require the resource data
  var

      // Get the data being stored in the Node request object
      requestData = req.app.get("resources"),

      // Create a temporary array for the resource links
      resourceLinks = [];

  // Loop thru requestData, which is an array.
  requestData.forEach(function(item){
    if(item.href == req.params.singleresourceid) {
      resourceLinks.push(item);
    }

  });

  // Render the resource view
  res.render("resources", {
    links: resourceLinks,
    pageTitle: req.params.singleresourceid

  });

});