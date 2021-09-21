-- Create Database as needed 

CREATE DATABASE testdb;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);