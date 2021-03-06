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
    emberComponents = require("./ember-components"),
    react = require("./react"),

    /* Grab the database from the Heroku config variables. If that's
     * not accessible, use the local "test" db that should be running
     * on your machine.
     */
    URI = process.env.MONGOLAB_URI ||
    process.env.PROD_MONGODB || 'mongodb://localhost/test',

    // Create a server variable for later use
    server;

// Connect to "jscanon" database with hidden mLab username & password
mongoose.connect(URI, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + URI + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + URI);
  }
});

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
app.use(emberComponents);
app.use(react);

// Point to asset files...images, .css, .js, etc.
app.use(express.static(__dirname + "/public/"));

// Parse a request as JSON
app.use(bodyParser.json());

// Parse a request as UTF-8
app.use(bodyParser.urlencoded({extended: true}));

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

// Home page route
app.use(require('./routes/index'));

// About page route
app.use(require('./routes/about'));

// API route that pulls info from the database
app.use("/api", require("./routes/api"));

/*
 * ===================
 * STOP ROUTE SETTINGS
 * ===================
 */



// Render the "404-page" view when encountering a 404 error
app.use(function (req, res, next) {
  res.status(404).render("404-page");
});

// Depending on the environment, use either the production or dev port
app.set("port", process.env.PORT || 3000);

// Run a local server via the "server" variable
server = app.listen(app.get("port"), function() {
  console.log("Listening on port " + app.get("port"));
});