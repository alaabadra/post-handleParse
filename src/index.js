const app = require("./app.js");

app.listen(app.get("port"), () =>
  console.log(`Server is up on port: ${app.get("port")}`)
);
