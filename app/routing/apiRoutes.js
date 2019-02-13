var data = require("../data/friends.js");
var friendArray = data.friends;

var Friend = function(name, photo, scores){
  this.name =  name,
  this.photo = photo,
  this.scores = scores,

  this.compareFriend = function(otherScores){
      var totalDiff = 0;
      for (let i = 0; i < this.scores.length; i++) {
          totalDiff += Math.abs(this.scores[i] - otherScores[i])            
      }

      return totalDiff;
  }
};

module.exports = function(app, path){
    app.get("/api/friends", function(req, res) {
      return res.json(friendArray);
    });
  
    app.post("/api/friends", function(req, res) {
      var user = new Friend(
        req.body.name, req.body.photo, req.body.scores
      );
        console.log(user.scores);
        
        var topFriend = null;
        var compare = 0;

    for (let i = 0; i < friendArray.length; i++) {
      let scoreDiff = user.compareFriend(friendArray[i].scores);
      let currentF = friendArray[i];

      if(i === 0){
        compare = scoreDiff;
        topFriend = currentF;
      }

        console.log("Friend: " + currentF.name);
        console.log("Difference: " + scoreDiff +"\n");
      
      if(scoreDiff < compare){
        compare = scoreDiff;
        topFriend = currentF;
      }  

    }

    console.log("Top Friend: " + topFriend.name);
    res.send(topFriend);
    friendArray.push(user);
    });
  }