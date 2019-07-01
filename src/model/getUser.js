const connection = require('../database/connection');

getUser = (email) => connection.query(`select * from users where email=$1`,[email]);

module.exports = getUser;
