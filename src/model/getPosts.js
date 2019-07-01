const connection = require("./../database/connection");
const getPost = () =>
  connection.query(
    "select posts.post, users.first_name, users.last_name from posts JOIN users ON users.id = posts.user_id"
  );

module.exports = getPost;
