// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Sample in-memory data (for simplicity)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Get a specific user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// Create a new user
app.post('/api/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  res.json(user);
});

// Delete a user
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send('User not found');
  
  users.splice(userIndex, 1);
  res.status(204).send();
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap
          swapped = true;
        }
      }
      n--;
    } while (swapped);
    
    return arr;
  }
  
  // Example usage
  const unsortedArray = [5, 3, 8, 4, 2];
  console.log(bubbleSort(unsortedArray));  // Output: [2, 3, 4, 5, 8]
  