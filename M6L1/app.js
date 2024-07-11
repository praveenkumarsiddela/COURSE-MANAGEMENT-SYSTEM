// Student Name: Praveen Kumar Siddela
// Student ID: 1227371004
// Date: 04/07/2024
const express = require('express');
const app = express();

// Middleware for validating userId
function isValidUserId(userId) {
  return userId.length === 4; 
}

// Middleware for request validation
app.use('/users/:userId', (req, res, next) => {
  if (!isValidUserId(req.params.userId)) {
    res.status(400).send('Invalid User ID');
  } else {
    next();
  }
});

// Authentication middleware
function authenticate(req, res, next) {
  const isAuthenticated = true;
  if (isAuthenticated) {
    console.log('User Authenticated Using Authenticate Middleware');
    next();
  } else {
    // If not authenticated, respond with a 401 Unauthorized status
    res.status(401).send('Unauthorized');
  }
}

// Logging middleware
function logRequest(req, res, next) {
  // Log information about the incoming request
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  // Proceed to the next middleware
  next();
}

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Implement dynamic route for users with validation
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID specified is ${userId}`);
});

// Complex middleware chain for a specific route
app.get('/complexroute', authenticate, logRequest, (req, res) => {
  res.send('This is a Complex route');
});

// Route to trigger a 404 error
app.get('/nonexistent-route', (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send('404 Not Found');
    console.log('Encountered 404 Not Found Error');
  } else {
    res.status(500).send('500 Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
