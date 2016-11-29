var

    // Bring in express
    express = require("express");

    // Create "app" & export it out so the root "app.js" can access it
    app = module.exports = express();

// Display text that says "react" when going to the React route
app.get("/react", function(req, res){
  res.send("react");
});