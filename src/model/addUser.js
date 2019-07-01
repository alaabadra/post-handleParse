const connection = require('./../database/connection');

const addUser = (firstName, lastName, email, password)=> connection.query(`INSERT INTO users (first_name,last_name,email,password) values ($1, $2, $3, $4)`,[firstName, lastName, email, password]);

module.exports = addUser;
