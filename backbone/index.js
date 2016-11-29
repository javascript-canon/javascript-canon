var express = require("express");
var app = module.exports = express();

app.get("/backbone", function(res, req){
	res.render("backbone");
});