var

    // Require the express module
    express = require("express"),

    // Create a new express application called "app"
    app = express(),

    // Require the various versions of JS Canon via their folders
    backbone = require("./backbone"),
    ember = require("./ember"),
    react = require("./react"),
    vanillaJS = require("./vanilla-js-mvc");

/*
 * =========================
 * START MIDDLEWARE SETTINGS
 * =========================
 */

// Plug in the various versions of JS Canon as middleware
app.use(backbone);
app.use(ember);
app.use(react);
app.use(vanillaJS);

/*
 * ========================
 * STOP MIDDLEWARE SETTINGS
 * ========================
 */



// Listen for the app on port 3000 & say so in the console
app.listen(3000);
console.log("listening on 3000...");
