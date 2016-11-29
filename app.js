var express = require("express"),
		app = express();


// Require sub-folders so we can see them from the index route
var backbone = require("./backbone");
var ember = require("./ember");
var react = require("./react");

// Mount the sub-folders as middleware
app.use(backbone );
app.use(ember);
app.use(react);


app.listen(3000);
console.log("listening on 3000...")
