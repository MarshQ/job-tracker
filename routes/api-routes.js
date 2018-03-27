
/*********** PASSPORT ROUTES ************************/

var db = require("../models");
var passport = require("../passport/passport.js");

module.exports = function(app) {
  app.post("/api/home", passport.authenticate("local"), function(req, res) {
    res.json("/home");
  });

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/home");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/application", function(req,res) {
    db.Jobs.create( 
      req.body
      //{
      // email: req.body.email,
      // company: req.body.company,
      // job_title: req.body.job_title,
      // tech_python: req.body.tech_python,
      // tech_javascript: req.body.tech_javascript,
      // tech_css: req.body.tech_css,
      // location: req.body.location,
      // cover_resume: req.body.cover_resume,
      // interview_scheduled: req.body.interview_scheduled,
      // interview_date: req.body.interview_date,
      // thank_you_note: req.body.thank_you_note,
      // technical_interview_questions: req.body.technical_interview_questions,
      // feedback: req.body.feedback
      //}
    ).then(function() {
      res.redirect(307, "/home")
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/api/application", function(req,res) {
    db.Jobs.findAll({
      where: {
        email: req.user.email
      }
    })
  })



  app.delete("/api/application/:id", function(req,res) {
    db.Jobs.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbjobs) {
      res.json(dbjobs);
    })
  })

  app.get("/api/application/:id", function(req,res) {
      db.Jobs.findOne({
        where: {
          id: req.params.id
        },
        include: [db.User]
      }).then(function(dbPost) {
        res.json(dbjobs);
      })
    })

  app.put("/api/application", function(req,res) {
    db.Jobs.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
    }).then(function(dbjobs) {
      res.json(dbjobs);
    })
  })

  

};