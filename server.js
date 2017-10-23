// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const aRoutes = require("./routing/apiRoutes.js");
const htmlRoutes = require("./routing/htmlRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", htmlRoutes);




// Exports listeners
// =============================================================

app.listen(3000);
