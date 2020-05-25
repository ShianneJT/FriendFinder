var friends = require('../data/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        var friendScore = req.body.scores;
        var scoresArr = [];
        var bestMatch = 0;

        for (var i = 0; i < friends.length; i++) {
            var total = 0;

            for (var j = 0; j < friendScore.length; j++) {
                total += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendScore[j])));
            }
            scoresArr.push(total);
        }

        for (var x = 0; x < scoresArr.length; x++) {
            if (scoresArr[x] <= scoresArr[bestMatch]) {
                bestMatch = x;
            }
        }

        var newBest = friends[bestMatch];
        res.json(newBest);

        friends.push(req.body);
    });
};
