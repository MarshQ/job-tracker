/*********** PASSPORT ROUTES ************************/

var db = require("../models");
var passport = require("../passport/passport.js");

module.exports = function (app) {
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json("/home");
    });


    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        console.log(db);
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            res.redirect(307, "/api/home");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    });

    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/login");
    });

    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

  app.post("/api/jobs", function(req,res) {
    db.Job.create(
      // req.body
      {
      email: req.body.email,
      company: req.body.company,
      job_title: req.body.title,
      // tech_python: req.body.tech_python,
      // tech_javascript: req.body.tech_javascript,
      // tech_css: req.body.tech_css,
      location: req.body.location,
      // cover_resume: req.body.cover_resume,
      // interview_scheduled: req.body.interview_scheduled,
      // interview_date: req.body.interview_date,
      // thank_you_note: req.body.thank_you_note,
      // technical_interview_questions: req.body.technical_interview_questions,
      // feedback: req.body.feedback
      }
    ).then(function() {
      res.redirect(307, "/home")
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/api/jobs", function(req,res) {
    db.Jobs.findAll({

    })
  })



  app.delete("/api/jobs/:id", function(req,res) {
    db.Jobs.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbjobs) {
      res.json(dbjobs);
    })
  })

  app.get("/api/jobs/:id", function(req,res) {
      db.Jobs.findOne({
        where: {
          id: req.params.id
        },
        include: [db.User]
      }).then(function(dbPost) {
        res.json(dbjobs);
      })
    })

  app.put("/api/jobs", function(req,res) {
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