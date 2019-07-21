var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id

  app.get("/example", function(req, res) {
    res.render("example", {
      example: "hi"
    });
  });

  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  app.get("/survey", function(req, res) {
    res.render("survey", {
      example: "hi"
    });
  });
  app.get("/contact", function(req, res) {
    res.render("contact", {
      example: "hi"
    });
  });

  app.get("/sign-in", function(req, res) {
    res.render("sign-in", {
      example: "hi"
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
