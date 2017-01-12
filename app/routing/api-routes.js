var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friendData = require("../data/friends.js");


module.exports = function(app) {

	app.get("/api/friends", function(request, response){
		
		
		response.json(friendData);
	});

	app.post("api/friends", function(request,response){

			var bestFriend = request.body;
			console.log(bestFriend);

			var peerScore = [];
			var newScore = [];

			var newPeerScore = stringInteger(bestFriend.friendScore);

			for (var i = 0; i < bestFriend.length; i++ ) {
				peerScore[i] = stringInteger(bestFriend[i].friendScore);

				newScore[i] = (pullTotal(peerScore[i], newPeerScore));
			}

			console.log("best match: " + bestFriend[lowestIndex(newScore)].friendName);



			friendData.push(bestFriend);
			response.json(bestFriend[lowestIndex(newScore)]);
		
	});

	var stringInteger = function(stringArray){
		var numbers = [];

		for(var i = 0; i<10; i++){
			numbers[i] = parseInt(stringArray[i]);
		}

		return numbers;
	}

	var pullTotal = function(numberArrOne, numberArrTwo ) {
		 var difference = [];
		 var total = 0;

		 for(var i = 0; i < 10; i++) {
		 	difference[i] = Math.abs(numberArrOne[i] - numberArrTwo[i]);
		 	total += difference[i];
		 }
		 return total;
	}

	var lowestIndex = function(numberArr) {
		var min = numberArr[0];
		var minIndex = 0;

		 for (var i = 1; i<numberArr.length; i++) {
		 	if(numberArr[i] < min){
		 		minIndex = i;
		 		min = numberArr[i];
		 	}
		 }

		 return minIndex;
	}

}

console.log(friendData);

//with help from Flao: https://github.com/FLao