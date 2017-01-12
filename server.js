var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//REQUIRE API AND HTML ROUTES ===================================

var apiRoute = require("./app/routing/api-routes.js")(app);
var htmlRoute = require("./app/routing/html-routes.js")

//SERVER START LISTEN ===========================================
app.listen(PORT,function(){
	

	console.log("APP LISTENING ON port: " + PORT);
});