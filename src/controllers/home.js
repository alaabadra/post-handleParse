const jwt = require("jsonwebtoken");
exports.get = (req, res) => {
  jwt.verify(req.cookies.jwt, process.env.SECRET, (err, payload) => {
    if (err) return res.redirect("/signin");
    res.redirect("/profile");
  });
};
