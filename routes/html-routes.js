var path = require("path");

var isAuthenticated = require("./../passport/middleware/isAuthenticated.js");

module.exports = function(app) {

  app.get("/", function(req, res) {
    if (req.user) {
      return res.redirect("/home");
    }
    res.render(`home`);
  });


  // If user login is successful then go to home, if unsuccessful go to login
  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/home");
    }
    res.render(`login`);
  });

  app.get("/signup", function(req, res) {
    if (req.user) {
      res.redirect("/home");
    }
    res.render(`signup`);
  });


  app.get("/home", function(req, res) {
    res.render('home');
  });



//   app.get("/new", function(req, res) {
//     res.render('new');
//   });

}