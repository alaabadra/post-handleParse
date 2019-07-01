const connection = require("./connection");
const fs = require("fs");
const path = require("path");

const sql = fs.readFileSync(path.join(__dirname, "build.sql")).toString();
const runBuild = (file, cb) => {
  connection.query(sql, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
};
runBuild(sql, (err, res) => {
  if (err) console.log("err", err);
  else console.log("Database was built succesfully");
});
module.exports = runBuild;
