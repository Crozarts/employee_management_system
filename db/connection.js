const util = require("util");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    post: 3306,
    user: "root",
    password: "password",
    database: "ems_db"
})
connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;