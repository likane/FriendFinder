var path = require("path");

module.exports = function(app) {

	app.get('/', function (request, response){
		res.sendFile(path.join(__dirname + './app/public/home.html'));
	});

	app.get('/survey', function (request, response){
		res.sendFile(path.join(__dirname + './app/public/survey.html'));
	});


	app.use(function (request, response) {
		res.sendFile(path.join(__dirname + './app/public/home.html'));
	});
}