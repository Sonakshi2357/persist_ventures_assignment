// db.js
const pgp = require('pg-promise')();
require('dotenv').config(); // To load environment variables

// Set up the PostgreSQL connection details
const db = pgp({
  host: process.env.DB_HOST,    // Database host
  port: process.env.DB_PORT,    // Database port
  database: process.env.DB_NAME, // Database name
  user: process.env.DB_USER,    // Database user
  password: process.env.DB_PASS // Database password
});

module.exports = db;
