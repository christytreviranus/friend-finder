let friends = require("../data/friends");

module.exports = function(app) {
  //All Friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  //Add new Friend
  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);
    let user = req.body;

    // parseInt for scores
    for(let i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    let bestFriendIndex = 0;
    let minimumDifference = 60;

    for(let i = 0; i < friends.length; i++) {
      let totalDifference = 0;
      for(let j = 0; j < friends[i].scores.length; j++) {
        let difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friends.push(user);

    // send back to browser the best friend match
    res.json(friends[bestFriendIndex]);
  });
};