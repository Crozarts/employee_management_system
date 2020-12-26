var random = require("./index")
random = displayQ();
const mysql = require("mysql")
var connection = mysql.createConnection({
    host: "localhost",
    post: 3306,
    user: "root",
    password: "",
    database: "ems_db"
})
connection.connect(function(error){
    if (error) {
        return error;
    } else {
        random;
    }
})