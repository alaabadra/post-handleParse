exports.get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.redirect("/signin");
};
