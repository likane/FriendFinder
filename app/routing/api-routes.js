var express = require("express");

var friendData = require("../data/friends.js");


module.exports = function(app) {

	app.get("/api/friends", function(req, res){
		// req.body.name
		// req.body.name
		// req.body.name
		// req.body.name

		// // logic

		// if(blabla === true){
		// 	res.json({success: true})
		// }

		res.json(friendData);
	});

	app.post("api/friends", function(req,res){

			friendData.push(req.body);
			res.json(true);
		
	});

}

console.log(friendData);