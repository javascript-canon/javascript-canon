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



// Set the development site port
app.set("port", process.env.PORT || 3000 );


// Run the server via the sever variable
server = app.listen(app.get("port"), function() {
  console.log("Listening on port " + app.get("port"));
});

// Reload the server when changes happen inside "app"
reload(server, app);
