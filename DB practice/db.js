// const mysql = require("mysql")

// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:""
// });

// con.connect(function(err){
//     if(err) throw err;
    
//     console.log("Connected");
// });





// const mysql = require("mysql")

// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:""
// });

// con.connect(function(err){
//     if(err) throw err;
    
//     console.log("Connected");
//     con.query("CREATE DATABASE crudPractice", function(err, result){
//         if(err) throw err;
//         console.log("Database created");
//     });
// });










// const mysql = require("mysql")

// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"crudPractice"

// });

// con.connect(function(err){
//     if(err) throw err;

//     console.log("Connected");
// });

// const sql = "CREATE TABLE crudPractice (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT(3), city VARCHAR(255))";
// con.query(sql, function(err, result){
//     if(err) throw err;
//     console.log("Table created");
// });















// const mysql = require("mysql")

// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"crudPractice"

// });

// con.connect(function(err){
//     if(err) throw err;

//     console.log("Connected");
// });

// const sql = "ALTER TABLE crudPractice ADD COLUMN salary VARCHAR(10)";
// con.query(sql, function(err, result){
//     if(err) throw err;
//     console.log("Column added");
// });










// const mysql = require("mysql")

// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"crudPractice"

// });

// con.connect(function(err){
//     if(err) throw err;

//     console.log("Connected");
// });

// const sql = "INSERT INTO crudPractice (name, age, city, salary) VALUES ('John', 30, 'New York', '50000')";
// con.query(sql, function(err, result){
//     if(err) throw err;
//     console.log("1 record inserted");
// });







// const mysql = require("mysql")

// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"crudPractice"

// });

// con.connect(function(err){
//     if(err) throw err;

//     console.log("Connected");
// });

// const sql = "INSERT INTO crudPractice (name, age, city, salary) VALUES ?";
// const values = [['John', 30, 'New York', '50000'], ['Alice', 28, 'Los Angeles', '62000'], ['Bob', 35, 'Chicago', '55000'], ['Charlie', 41, 'Houston', '70000'], ['Samantha', 27, 'Phoenix', '58000']];
// con.query(sql, [values], function(err, result){
//     if(err) throw err;
//     console.log("5 records inserted");
// });









// const mysql = require("mysql")

// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"crudPractice"

// });

// con.connect(function(err){
//     if(err) throw err;

//     console.log("Connected");
// });

// const sql = "UPDATE crudPractice SET name = 'AFZAL KHAN' WHERE id = 1";
// con.query(sql, function(err, result){
//     if(err) throw err;
//     console.log("1 record updated");
// });








// const mysql = require("mysql")

// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"crudPractice"

// });

// con.connect(function(err){
//     if(err) throw err;

//     console.log("Connected");
// });

// const sql = "DELETE FROM crudPractice WHERE age = 41";
// con.query(sql, function(err, result){
//     if(err) throw err;
//     console.log("1 record deleted");
// });






/**
 * Node.js MySQL Demo: CRUD Operations, Queries, and Documentation
 * -------------------------------------------------------------
 * This script establishes a connection to a local MySQL database using
 * the `mysql` npm package and provides reusable helper functions for
 * create, read, update, delete, filtering, sorting, aggregation,
 * pagination, and search operations.
 */

const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudPractice"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL database.");

    // Default demonstration: select people whose name begins with A.
    selectPeopleByNamePattern('A%', function(err, results) {
        if (err) throw err;
        console.log("Records found:");
        console.log(results);
        // closeConnection();
    });
});

// const sql = "SELECT * FROM crudPractice";
// con.query(sql, function(err, result){
//     if(err) throw err;
//     console.log("Records found");
//     console.log(result);




/**
 * NOTE: The query helpers below can be executed by uncommenting the
 * usage examples at the bottom of this file. Use them to build your
 * own database scripts or to study the most common CRUD patterns.
 */

/**
 * Helper function to execute a SQL query with optional parameters.
 *
 * @param {string} sql
 * @param {Array|null} params
 * @param {function(Error, Object)} callback
 */
function executeQuery(sql, params, callback) {
    con.query(sql, params, function(err, results) {
        if (err) return callback(err);
        callback(null, results);
    });
}

/**
 * Create the database if it does not exist.
 *
 * @param {string} databaseName
 * @param {function(Error, Object)} callback
 */
function createDatabase(databaseName, callback) {
    const sql = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
    executeQuery(sql, null, callback);
}

/**
 * Create the crudPractice table with the required schema.
 *
 * @param {function(Error, Object)} callback
 */
function createTable(callback) {
    const sql = `CREATE TABLE IF NOT EXISTS crudPractice (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        age INT(3),
        city VARCHAR(255),
        salary VARCHAR(10)
    )`;
    executeQuery(sql, null, callback);
}

/**
 * Insert a single person record.
 *
 * @param {Array} person [name, age, city, salary]
 * @param {function(Error, Object)} callback
 */
function insertPerson(person, callback) {
    const sql = "INSERT INTO crudPractice (name, age, city, salary) VALUES (?, ?, ?, ?)";
    executeQuery(sql, person, callback);
}

/**
 * Insert multiple people in a batch.
 *
 * @param {Array<Array>} people
 * @param {function(Error, Object)} callback
 */
function insertPeople(people, callback) {
    const sql = "INSERT INTO crudPractice (name, age, city, salary) VALUES ?";
    executeQuery(sql, [people], callback);
}

/**
 * Update a person's name by ID.
 *
 * @param {number} id
 * @param {string} newName
 * @param {function(Error, Object)} callback
 */
function updatePersonNameById(id, newName, callback) {
    const sql = "UPDATE crudPractice SET name = ? WHERE id = ?";
    executeQuery(sql, [newName, id], callback);
}

/**
 * Update a person's age by name.
 *
 * @param {string} name
 * @param {number} newAge
 * @param {function(Error, Object)} callback
 */
function updatePersonAgeByName(name, newAge, callback) {
    const sql = "UPDATE crudPractice SET age = ? WHERE name = ?";
    executeQuery(sql, [newAge, name], callback);
}

/**
 * Update salary for everyone in a city.
 *
 * @param {string} city
 * @param {string} newSalary
 * @param {function(Error, Object)} callback
 */
function updateSalaryByCity(city, newSalary, callback) {
    const sql = "UPDATE crudPractice SET salary = ? WHERE city = ?";
    executeQuery(sql, [newSalary, city], callback);
}

/**
 * Delete a person by ID.
 *
 * @param {number} id
 * @param {function(Error, Object)} callback
 */
function deletePersonById(id, callback) {
    const sql = "DELETE FROM crudPractice WHERE id = ?";
    executeQuery(sql, [id], callback);
}

/**
 * Delete all people in a specific city.
 *
 * @param {string} city
 * @param {function(Error, Object)} callback
 */
function deletePeopleByCity(city, callback) {
    const sql = "DELETE FROM crudPractice WHERE city = ?";
    executeQuery(sql, [city], callback);
}

/**
 * Select all people from the table.
 *
 * @param {function(Error, Object)} callback
 */
function selectAllPeople(callback) {
    const sql = "SELECT * FROM crudPractice";
    executeQuery(sql, null, callback);
}

/**
 * Select people whose name matches a SQL LIKE pattern.
 *
 * @param {string} pattern
 * @param {function(Error, Object)} callback
 */
function selectPeopleByNamePattern(pattern, callback) {
    const sql = "SELECT * FROM crudPractice WHERE name LIKE ?";
    executeQuery(sql, [pattern], callback);
}

/**
 * Select people by city.
 *
 * @param {string} city
 * @param {function(Error, Object)} callback
 */
function selectPeopleByCity(city, callback) {
    const sql = "SELECT * FROM crudPractice WHERE city = ?";
    executeQuery(sql, [city], callback);
}

/**
 * Select people with salary above a threshold.
 *
 * @param {number} minSalary
 * @param {function(Error, Object)} callback
 */
function selectPeopleWithSalaryAbove(minSalary, callback) {
    const sql = "SELECT * FROM crudPractice WHERE CAST(salary AS UNSIGNED) > ?";
    executeQuery(sql, [minSalary], callback);
}

/**
 * Count people grouped by city.
 *
 * @param {function(Error, Object)} callback
 */
function countPeopleByCity(callback) {
    const sql = "SELECT city, COUNT(*) AS total FROM crudPractice GROUP BY city";
    executeQuery(sql, null, callback);
}

/**
 * Get average salary grouped by city.
 *
 * @param {function(Error, Object)} callback
 */
function getAverageSalaryByCity(callback) {
    const sql = "SELECT city, AVG(CAST(salary AS UNSIGNED)) AS averageSalary FROM crudPractice GROUP BY city";
    executeQuery(sql, null, callback);
}

/**
 * Select the youngest person(s) in the table.
 *
 * @param {function(Error, Object)} callback
 */
function selectYoungestPeople(callback) {
    const sql = "SELECT * FROM crudPractice WHERE age = (SELECT MIN(age) FROM crudPractice)";
    executeQuery(sql, null, callback);
}

/**
 * Select the oldest person(s) in the table.
 *
 * @param {function(Error, Object)} callback
 */
function selectOldestPeople(callback) {
    const sql = "SELECT * FROM crudPractice WHERE age = (SELECT MAX(age) FROM crudPractice)";
    executeQuery(sql, null, callback);
}

/**
 * Paginate people results using LIMIT and OFFSET.
 *
 * @param {number} page
 * @param {number} pageSize
 * @param {function(Error, Object)} callback
 */
function selectPeoplePaginated(page, pageSize, callback) {
    const offset = (page - 1) * pageSize;
    const sql = "SELECT * FROM crudPractice ORDER BY id ASC LIMIT ? OFFSET ?";
    executeQuery(sql, [pageSize, offset], callback);
}

/**
 * Search people by keyword in name or city.
 *
 * @param {string} keyword
 * @param {function(Error, Object)} callback
 */
function searchPeopleByKeyword(keyword, callback) {
    const searchValue = `%${keyword}%`;
    const sql = "SELECT * FROM crudPractice WHERE name LIKE ? OR city LIKE ?";
    executeQuery(sql, [searchValue, searchValue], callback);
}

/**
 * Select people sorted by salary in ascending or descending order.
 *
 * @param {'ASC'|'DESC'} order
 * @param {function(Error, Object)} callback
 */
function selectPeopleSortedBySalary(order, callback) {
    const sql = `SELECT * FROM crudPractice ORDER BY CAST(salary AS UNSIGNED) ${order}`;
    executeQuery(sql, null, callback);
}

/**
 * Remove all rows from the table.
 *
 * @param {function(Error, Object)} callback
 */
function truncateTable(callback) {
    const sql = "TRUNCATE TABLE crudPractice";
    executeQuery(sql, null, callback);
}

/**
 * Close the database connection cleanly.
 */
function closeConnection() {
    con.end(function(err) {
        if (err) throw err;
        console.log("MySQL connection closed.");
    });
}

/**
 * Example dataset for bulk insertion.
 */
const examplePeople = [
    ['John', 30, 'New York', '50000'],
    ['Alice', 28, 'Los Angeles', '62000'],
    ['Bob', 35, 'Chicago', '55000'],
    ['Charlie', 41, 'Houston', '70000'],
    ['Samantha', 27, 'Phoenix', '58000']
];

/**
 * Example usage notes. Uncomment the calls below to test them.
 */
// createTable(function(err) {
//     if (err) throw err;
//     console.log('Table created');
// });

// insertPeople(examplePeople, function(err, result) {
//     if (err) throw err;
//     console.log('Inserted', result.affectedRows, 'rows');
// });

// updatePersonNameById(1, 'AFZAL KHAN', function(err, result) {
//     if (err) throw err;
//     console.log('Rows updated:', result.affectedRows);
// });

// deletePeopleByCity('Houston', function(err, result) {
//     if (err) throw err;
//     console.log('Deleted rows:', result.affectedRows);
// });

// selectAllPeople(function(err, rows) {
//     if (err) throw err;
//     console.log('All people:', rows);
// });

// selectPeopleByCity('Chicago', function(err, rows) {
//     if (err) throw err;
//     console.log('Chicago people:', rows);
// });

// countPeopleByCity(function(err, rows) {
//     if (err) throw err;
//     console.log('Count by city:', rows);
// });

// getAverageSalaryByCity(function(err, rows) {
//     if (err) throw err;
//     console.log('Average salary by city:', rows);
// });

// searchPeopleByKeyword('York', function(err, rows) {
//     if (err) throw err;
//     console.log('Search results:', rows);
// });
