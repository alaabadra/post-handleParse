const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const error = require("./error.js");
const getUser = require("../model/getUser");

exports.get = (req, res) => {
  res.render("signin", {
    "button-value": "Sign up",
    link: "/signup",
    js: "",
    css: "signin"
  });
};

exports.post = (req, res) => {
  getUser(req.body.email)
    .then(result => {
      if (result.rows[0]) {
        bcrypt
          .compare(req.body.password, result.rows[0].password)
          .then(isOK => {
            if (isOK) {
              const user = {
                userId: result.rows[0].id,
                loggedIn: true
              };
              const token = jwt.sign(user, process.env.SECRET);
              res.cookie("jwt", token, { maxAge: 1000 * 60 * 60 * 24 * 30 });
              res.redirect("/profile");
            } else {
              res.render("signin", {
                css: "signin",
                msg: "password is wrong "
              });
            }
          });
      }
    })
    .catch(err => error.server(err, req, res, null));
};
