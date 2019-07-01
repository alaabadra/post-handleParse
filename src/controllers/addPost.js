const addPost = require("./../model/addPost.js");
const { verify } = require("jsonwebtoken");
exports.post = (req, res) => {
  const post = req.body["post-area"];
  verify(req.cookies.jwt, process.env.SECRET, (err, token) => {
    addPost(post, token.userId).then(result => res.redirect("/"));
  });
};
