const bcrypt = require("bcryptjs");
const error = require("./error.js");
const addUser = require("./../model/addUser.js");
const getUser = require("../model/getUser");

exports.get = (request, response) => {
  response.render("signup", {
    "button-value": "Sign In",
    link: "/signin",
    js: "signup",
    css: "signup"
  });
};

exports.post = (request, response) => {
  const userData = request.body;
  getUser(userData.email).then(result => {
    // console.log("111111111111", result);
    if (result.rows.length === 0) {
      bcrypt
        .genSalt(5)
        .then(salt => {
          bcrypt
            .hash(userData.password, salt)
            .then(pass => {
              addUser(
                userData.firstname,
                userData.lastname,
                userData.email,
                pass
              )
                .then(() => {
                  response.redirect("/signin");
                })
                .catch(err => {
                  error.server(err, request, response, null);
                });
            })
            .catch(err => {
              error.server(err, request, response, null);
            });
        })
        .catch(err => {
          error.server(err, request, response, null);
        });
    } else {
      response.render("signin", { msg: "user is already exist " });
    }
  });
};
