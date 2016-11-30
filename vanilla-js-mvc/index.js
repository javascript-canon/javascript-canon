var

    // Bring in express
    express = require("express");

    // Create "app" & export it out so the root "app.js" can access it
    app = module.exports = express(),

    // Point to the resource JSON data
    resourceData = require(__dirname + "/data/resources.json");



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

// Render the index template when going to the Vanilla JS MVC route
app.get("/vanilla-js-mvc", function(req, res) {
  res.render("index", {
    pageTitle: "The JavaScript Canon - Vanilla JS"
  });
});


// Route for a single learning resource
app.get("/vanilla-js-mvc/:singleresourceid", function(req, res) {

  // Require the resource data
  var

      // Get the data being stored in the Node request object
      requestData = req.app.get("resources"),

      // Create a temporary array for the resource links
      resourceLinks = [];

  // Loop thru requestData, which is an array.
  requestData.resources.forEach(function(item){
    if(item.href == req.params.singleresourceid) {
      resourceLinks.push(item);
    }
  });

  // Render the resource view
  res.render("resources", {
    pageTitle: "Resources",
    links: resourceLinks
  });

});