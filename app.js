// use strict mode
"use strict";

var

    // Require the express module
    express = require("express"),

    // Create a new express application called "app"
    app = express(),

    // Require mongoose
    mongoose = require("mongoose"),

    // Require body-parser
    bodyParser = require("body-parser"),

    // Require the various versions of JS Canon via their folders
    vanillaJS = require("./vanilla-js-mvc"),

    // Bring in the hidden mLab username and password
    secrets = require("./js-build/secrets"),

    // Create a server variable for later use
    server;



// Connect to "jscanon" database with hidden mLab username & password
mongoose.connect("mongodb://" + secrets.mLabUsername + ":" +  secrets.mLabPassword + "@ds129038.mlab.com:29038/jscanon");



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

// Plug in the various versions of JS Canon as middleware
app.use(vanillaJS);

// Point to asset files...images, .css, .js, etc.
app.use(express.static(__dirname + "/public/"));


// I need to understand how this works
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* Build the "api" route
 * TODO: either move the actual route file to this page or move the
 * other routes to the "/routes" directory.
 */
app.use("/api", require("./routes/api"));

/*
 * ========================
 * STOP MIDDLEWARE SETTINGS
 * ========================
 */



/*
 * ====================
 * START ROUTE SETTINGS
 * ====================
 */

 // HOME PAGE ROUTE: Render the index template when going to home page
app.get("/", function(req, res) {
  res.render("index", {
    pageID: "index"
  });
});

// ABOUT PAGE ROUTE: Render the about template when going to about page
app.get("/about", function(req, res) {
  res.render("about", {
    pageID: "about"
  });
});

/*
 * ===================
 * STOP ROUTE SETTINGS
 * ===================
 */



// Set the development site port
app.set("port", process.env.PORT || 3000 );

// Run a local server via the "server" variable
server = app.listen(app.get("port"), function() {
  console.log("Listening on port " + app.get("port"));
});