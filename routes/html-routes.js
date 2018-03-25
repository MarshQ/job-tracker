var path = require("path");

var isAuthenticated = require("./../passport/middleware/isAuthenticated.js");

module.exports = function(app) {

  app.get("/", function(req, res) {
    if (req.user) {
      return res.redirect("/home");
    }
    res.render(`login`);
  });

  app.get("/main", function(req, res) {
    if (req.user) {
      res.redirect("/main");
    }
    res.render(`home`);
  });

  app.get("/home", function(req, res) {
    res.render('home');
  });

  app.get("/new", function(req, res) {
    res.render('new');
  });

}