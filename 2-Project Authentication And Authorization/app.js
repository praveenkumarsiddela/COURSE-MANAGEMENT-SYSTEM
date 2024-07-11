// application core dependency modules
// Note: The order of the require statements is important
// You will need to restore the packages by running npm install
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');



// start express app
const app = express()



// 3) GLOBAL MIDDLEWARES // Body parser, reading data from body into req.body
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse cookies
app.use(cookieParser());

// // 6) ROUTES API for Books
const booksRoutes = require('./routes/bookRoutes.js');
app.use('/books', booksRoutes);

module.exports = app;
