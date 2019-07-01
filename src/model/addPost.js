const connection = require('./../database/connection');

const addPost = (postContent, userID)=> connection.query(`INSERT INTO posts (post, user_id) values ($1, $2)`,[postContent, userID]);

module.exports = addPost;
