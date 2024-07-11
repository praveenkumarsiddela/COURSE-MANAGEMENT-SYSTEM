// Student Name: Praveen Kumar Siddela
// Student ID: 1227371004
// Date: 04/07/2024

const express = require('express');
const app = express();
// First middleware
app.use((req, res, next) => {
  console.log('First middleware');
  next();
});
// Second middleware
app.use((req, res, next) => {
   console.log('Second middleware');
  next();
});
// Custom middleware
function logMethodAndUrl(req, res, next) {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next();
   }
   app.use(logMethodAndUrl);
   // Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  // Trigger an error
  app.get('/error', (req, res) => {
    throw new Error('Oops!');
  });
app.listen(3000, () => console.log('Server started on port 3000'));