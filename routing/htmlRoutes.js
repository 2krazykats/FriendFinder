const express = require("express");
const path = require("path");

var htmlApp = express();

htmlApp.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname,"../public", "survey.html"));
});

htmlApp.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname,"../public", "home.html"));
});


module.exports = htmlApp;
