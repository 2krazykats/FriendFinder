const express = require("express");
const path = require("path");

var apiApp = express();

const friendsData = require("../data/friends");

apiApp.get("/api/friends", function(req, res) {
	// We need to define friends object somewhere we can see it

	for(var i = 0; i < friends.length; i++) {
		var html = "<h1>";

		html += `<p>Name: ${friends.name}</p>`;
		html += `<p><img src='${friends.photo}'</p>`;
	}

	res.send(html);
});


apiApp.post("/api/friends", function(req, res) {
	var data = req.body;
	console.log(data);



})


function findMatch(data, friendsArray) {

}

apiApp.post("/api/")

module.exports = apiApp;