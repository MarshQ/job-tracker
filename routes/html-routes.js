var path = require("path");

var isAuthenticated = require("./../passport/middleware/isAuthenticated.js");

module.exports = function(app) {

  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/home");
    }
    res.render(`signup`);
  });

  app.get("/main", function(req, res) {
    if (req.user) {
      res.redirect("/main");
    }
    res.render(`home`);
  });

  app.get("/home", isAuthenticated, function(req, res) {
    res.render('home');
  });

}