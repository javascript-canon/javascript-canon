var

    // Bring in express
    express = require("express");

    // Create "app" & export it out so the root "app.js" can access it
    app = module.exports = express();

/*
 * ==================
 * START APP SETTINGS
 * ==================
 */

/* Point to views in the local folder
 *
 * TODO: get these views in subfolders
 */
app.set("views", __dirname);

// Set the view engine to be EJS
app.set("view engine", "ejs");

/*
 * =================
 * STOP APP SETTINGS
 * =================
 */



// Render the article template when going to the Backbone route
app.get("/backbone", function(req, res) {
  res.render("article");
});