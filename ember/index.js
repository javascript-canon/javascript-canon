var express = require("express");
var app = module.exports = express();

app.get("/ember", function(res, req){
	res.render("ember");
});