// use strict mode
"use strict";

// Bring in express
var

    // Require the express module
    express = require("express"),

    // Create a new express application called "app"
    app = express(),

    // Require the various versions of JS Canon via their folders
    vanillaJS = require("./vanilla-js-mvc"),

    // Require module for auto-refreshing the browser
    reload = require("reload"),

    // Create a server variable for later use
    server;



/*
 * =========================
 * START MIDDLEWARE SETTINGS
 * =========================
 */

// Plug in the various versions of JS Canon as middleware
app.use(vanillaJS);

/*
 * ========================
 * STOP MIDDLEWARE SETTINGS
 * ========================
 */


/*
 * ==================
 * START APP SETTINGS
 * ==================
 */

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
app.get("/", function(req, res) {
  res.send("<h1>foo</h1>");
});

// Set the development site port
app.set("port", process.env.PORT || 3000 );


// Run the server via the sever variable
server = app.listen(app.get("port"), function() {
  console.log("Listening on port " + app.get("port"));
});

// Reload the server when changes happen inside "app"
reload(server, app);