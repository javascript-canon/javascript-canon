// use strict mode
"use strict";

var

    // Require the express module
    express = require("express"),

    // Create a new express application called "app"
    app = express(),

    // Point to the resource JSON data
    resourceData = require("./data/resources.json"),

    // Require module for auto-refreshing the browser
    reload = require("reload"),

    // Create a server variable for later use
    server;

/*
 * ==================
 * START APP SETTINGS
 * ==================
 */

// Set the development site port
app.set("port", process.env.PORT || 3000 );

// Set a pointer the resource data
app.set("resources", resourceData);

// Set the view template engine to be ejs
app.set("view engine", "ejs");

// Set where the views are
app.set("views", "app/views");

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
app.use(express.static("app/public"));

/* Routes */

// Index route
app.use(require("./routes/index"));

// Resource route
app.use(require('./routes/resources'));

// Type route
app.use(require('./routes/type'));

/*
 * ========================
 * STOP MIDDLEWARE SETTINGS
 * ========================
 */


// Run the server via the sever variable
server = app.listen(app.get("port"), function() {
  console.log("Listening on port " + app.get("port"));
});

// Reload the server when changes happen inside "app"
reload(server, app);