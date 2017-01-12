var path = require("path");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app) {


	app.get('/', function (request, response){ // LAND ON HOME PAGE
		response.sendFile(path.join(__dirname, '../public/home.html'));
	});

	app.get('/survey', function (request, response){ //CONNECT TO SURVEY
		response.sendFile(path.join(__dirname,'../public/survey.html'));
	});


	app.use(function (request, response) { // LAND ON HOME PAGE IF NOTHING ELSE
		response.sendFile(path.join(__dirname,'../public/home.html'));
	});
}