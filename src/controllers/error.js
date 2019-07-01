exports.client = (req, res) => {
  res.status(404).render("error", {
    layout: "error",
    statusCode: 404,
    message: "Page Not Found",
    errorImage: "error404"
  });
};

exports.server = (err, req, res, next) => {
  console.log("server error", err);
  res.status(500).render("error", {
    layout: "error",
    statusCode: 500,
    message: "Internal Server Error",
    errorImage: "error500"
  });
};
