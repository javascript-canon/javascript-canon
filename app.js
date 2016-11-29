var express = require("express"),
		app = express(),
		backbone = require("./backbone"),
		ember = require("./ember"),
		react = require("./react");


/*
 * =========================
 * START MIDDLEWARE SETTINGS
 * =========================
 */
app.use(backbone);
app.use(ember);
app.use(react);
/*
 * =========================
 * START MIDDLEWARE SETTINGS
 * =========================
 */



// Listen for the app on port 3000 & say so in the console
app.listen(3000);
console.log("listening on 3000...");
