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

};