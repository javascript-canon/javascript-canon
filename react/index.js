var express = require("express");
var app = module.exports = express();

app.get("/react", function(res, req){
	res.send("react");
});