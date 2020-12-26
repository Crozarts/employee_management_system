DROP DATABASE IF EXISTS ems_db
CREATE DATABASE ems_db;
USE ems_db;

​
-- Create the department table
CREATE TABLE IF NOT EXISTS spartment (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL 
);

-- create a role table

-- create a employee table w/ first last name id role id and manager id