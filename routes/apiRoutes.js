var db = require("../models");
var mentors = require("../mentors");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  // Post mentors data to the database
  app.get("/api/mentors/seeds", function(req, res) {
    db.Mentor.bulkCreate(mentorSeeds).then(function(response) {
      console.log(response);
      res.json(response);
    });
  });
};


var mentors = require("../mentors");

module.exports = function(app) {
    // Return friends found in mentors.js 
    app.get("/api/mentors", function(request, response) {
        response.json(mentors);
    });

    app.post("/api/mentors", function(request, response) {
        // console.log(request.body.scores);

        var user = request.body;

        for (let i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        // default friend match is first friend, result will be friend with closest scores
        var bffIndex = 0;
        var minimumDifference = 40;

        //  add to the total difference
        for (let i = 0; i < mentors.length; i++) {
            let totalDifference = 0;
            for (let j = 0; j < mentors[i].scores.length; j++) {
                let difference = Math.abs(user.scores[j] - mentors[i].scores[j]);
                totalDifference += difference;
            }

            // if change, change the bf index 
            if (totalDifference < minimumDifference) {
                bffIndex = i;
                minimumDifference = totalDifference;
            }
        }

        // after finding match, add user to friend array
        mentors.push(user);

        // send back to browser the best friend match
        response.json(mentors[surveyResult]);
    });
};