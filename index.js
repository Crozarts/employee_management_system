var inquirer = require ("inquirer")

const mysql = require("mysql")
var connection = mysql.createConnection({
    host: "localhost",
    post: 3306,
    user: "root",
    password: "password",
    database: "ems_db"
})
connection.connect(function(error){
    if (error) {
        throw error;
    } else {
        displayQ();
    }
})
// var names;
// inquirer

// // var names = ["jeff", "bob", "jim", "mary"]
// // var persons = {age: 12, name: "ben"}
// .prompt (names = [ "jeff", "bob", "jim", "mary"
// //     {question1: "what is my name?", 
// //      answers: ["answer1", "answer2", "answer3"]
// // },     {question1: "what is my name?", 
// // answers: ["answer1", "answer2", "answer3"]
// // },     {question1: "what is my name?", 
// // answers: ["answer1", "answer2", "answer3"]
// // }
// ]).then( function(results){
//     console.log(results)
// })
function displayQ(){

inquirer   
 .prompt({      name: "userWhatToDo",      type: "list",      message: "What would you like to do?",      choices: ["View All Employees", "View All Employees By Department", "View All Employees By Role", "Add Employee", "Add Role", "Add Department", "Remove Employee", "Update Employee Role", "Remove Employee", "EXIT"]    })    
.then(function (answer) {      
    // based on their answer, either call the bid or the post functions       
    // if (answer.userWhatToDo === "View All Employees") {        viewEmployeesAll();      }      
    // else if (answer.userWhatToDo === "View All Employees By Department") {        viewEmployeesByDept();      }      
    // else if (answer.userWhatToDo === "View All Employees By Role") {        viewEmployeesByRole();      }      
    // else if (answer.userWhatToDo === "Add Employee") {        addEmployee();      }      
    // else if (answer.userWhatToDo === "Add Role") {        addRole();      }      
    // else if (answer.userWhatToDo === "Add Department") {        addDept();      }      
    // else if (answer.userWhatToDo === "Remove Employee") {        removeEmployee();      }      
    // else if (answer.userWhatToDo === "Update Employee Role") {        updateEmployeeRole();      }      
    // else if (answer.userWhatToDo === "EXIT") {        connection.end();      }    });}
    console.log(answer) })
}