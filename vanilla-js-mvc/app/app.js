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

// Set the view template engins to be pug
app.set("view engine", "pug");

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

// Routes

// Index rout
app.use(require("./routes/index"));

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