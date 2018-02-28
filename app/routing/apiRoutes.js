/* Your apiRoutes.js file should contain two routes:

    A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
	
Determine the user's most compatible friend using the following as a guide:
	Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
	With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
		Example:
			User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
			User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
			Total Difference: 2 + 1 + 2 = 5
	Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
	The closest match will be the user with the least amount of difference. */

//ROUTERS part 2: THANKS https://stackoverflow.com/questions/38486093/express-js-route-modules-not-working
var friendList = require("../data/friends.js"); 

module.exports = function(app){
	app.get("/api/friends", function(req,res){
		res.json(friendList);
	});
	app.post("/api/friends", function(req,res){
		var newFriendScores = req.body.scores;
		var scoresArray = [];
		var friendCount = 0;
		var bestMatch = 0;
		for(var i = 0; i < friendList.length; i++){
		var scoresDiff = 0;
			for(var j = 0; j < newFriendScores.length; j++){
				scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
			}
			scoresArray.push(scoresDiff);
		}
		for(var i = 0; i < scoresArray.length; i++){
			if(scoresArray[i] <= scoresArray[bestMatch]){
				bestMatch = i;
			}
		}
		var bff = friendList[bestMatch];
		res.json(bff);
		friendList.push(req.body);
	});
};