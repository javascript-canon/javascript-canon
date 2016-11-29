var

    // Bring in express
    express = require("express");

    // Create "app" & export it out so the root "app.js" can access it
    app = module.exports = express();


app.get("/ember", function(req, res){
  res.send("ember");
});