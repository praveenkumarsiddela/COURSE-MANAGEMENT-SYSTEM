// Student Name: Praveen kumar Siddela
// Student ID: 1227371004
// Date: 04/21/2024

const express = require('express');
const app = express();
const port = 3000;

// Step 2: Implement HTTP Status Codes

// Route for HTTP status code 200
app.get('/200', (req, res) => {
  res.status(200).send('OK: The request has succeeded');
});

// Route for HTTP status code 201
app.get('/201', (req, res) => {
  res.status(201).send('Created: Resource created successfully');
});

// Route for HTTP status code 400
app.get('/400', (req, res) => {
  res.status(400).send('Bad Request: The server cannot process the request');
});

// Route for HTTP status code 404
app.get('/404', (req, res) => {
  res.status(404).send('Not Found: The requested resource was not found');
});

// Route for HTTP status code 500
app.get('/500', (req, res) => {
  res.status(500).send('Internal Server Error: The server encountered an unexpected condition');
});

// Step 3: Create Middleware for Error Handling

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} Request: ${req.path}`);
  next();
});

// Middleware for handling 404 errors
app.use((req, res, next) => {
  res.status(404).send('Not Found: The requested resource was not found');
});

// General error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error: The server encountered an unexpected condition');
});

// Step 4: Implement Promise Try/Catch

// Asynchronous route with error handling
app.get('/async', async (req, res, next) => {
  try {
    await new Promise((resolve, reject) => {
      // Simulate async operation
      setTimeout(() => {
        // Intentionally throwing an error for demonstration
        reject(new Error('Something went wrong'));
      }, 1000);
    });
    res.status(200).send('Async Operation Completed');
  } catch (err) {
    next(err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
