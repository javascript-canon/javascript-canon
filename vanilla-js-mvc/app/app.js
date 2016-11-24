var 
    express = require('express'),
    app = express(),
    resourceData = require("./data/resources.json"),
    reload = require("reload"),
    server;

app.set("port", process.env.PORT || 3000 );
app.set("resources", resourceData);
app.set("view engine", "pug");
app.set("views", "app/views");

/*
 * "use" stuff in the app
 */

 // grab asset files...images, .css, .js, etc.
app.use(express.static('app/public'));

// Routes
app.use(require('./routes/index'));

// Run server
server = app.listen(app.get("port"), function() {
  console.log("Listening on port " + app.get("port"));
});

// Reload the server when changes happen
reload(server, app);