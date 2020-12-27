const connection = require("./connection");

class DB {
    // Keeping a reference to the connection on the class in case we need it later
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees(employee) {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON department.id = role.department_id GROUP BY id",
            employee
        );
    }

    findAllPossibleManagers(employeeId) {
        return this.connection.query(
            "SELECT id, first_name, last_name FROM employee WHERE id != ?",
            employeeId
        );
    }

    createEmployee(employee) {
        return this.connection.query(
            "INSERT INTO employee SET ?",
            employee
        );
    }

    deleteEmployee(employee) {
        return this.connection.query(
            "DELETE FROM employee WHERE id = ?",
            employee
        );
    }

    deleteRole(role) {
        return this.connection.query(
            "DELETE FROM role WHERE id = ?",
            role
        );
    }

    deleteDepartment(department) {
        return this.connection.query(
            "DELETE FROM department WHERE id = ?",
            department
        );
    }

    updateEmployeeRole(employeeId, roleId) {
        return this.connection.query(
            'UPDATE employee SET role_id = ? WHERE id = ?',
            [roleId, employeeId]
        );
    }

    updateEmployeeManager(employeeId, managerId) {
        return this.connection.query(
            "UPDATE employee SET manager_id = ? WHERE id = ?",
            [managerId, employeeId]
        );
    }

    findAllRoles() {
        return this.connection.query(
            'SELECT role.id, role.title, role.salary, department.department_name, role.salary FROM role LEFT JOIN department ON department.id = role.department_id GROUP BY id'
        );
    }

    createRole(role) {
        return this.connection.query(
            'INSERT INTO role SET ?',
            role
        );
    }

    findAllDepartments() {
        return this.connection.query(
            "SELECT department.id, department.department_name, SUM(role.salary) AS utilized_budget FROM department LEFT JOIN role ON role.department_id = department.id LEFT JOIN employee ON employee.role_id = role.id GROUP BY department.id, department.department_name"
        );
    }

    createDepartment(department) {
        return this.connection.query(
            'INSERT INTO department SET ?',
            department
        );
    }

    findAllEmployeesByDepartment(departmentId) {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE department.id = ?;",
            departmentId
        );
    }

    findAllEmployeesByManager(managerId) {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, department.department_name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
            managerId
        );
    }
}

module.exports = new DB(connection);