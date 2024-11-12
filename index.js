// index.js
const db = require('./db'); // Import the database connection

// Example: Safely inserting data into the database using prepared statements
async function createUser(username, password) {
  try {
    // Prepared statement using pg-promise's $1, $2 syntax
    const result = await db.none('INSERT INTO users(username, password) VALUES($1, $2)', [username, password]);
    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// Example: Safely querying data using prepared statements
async function getUserByUsername(username) {
  try {
    // Prepared statement using $1 for the parameter
    const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username]);
    if (user) {
      console.log('User found:', user);
    } else {
      console.log('User not found');
    }
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

// Example usage: creating and fetching user
(async function() {
  await createUser('john_doe', 'password123');
  await getUserByUsername('john_doe');
})();
