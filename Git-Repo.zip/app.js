const express = require('express');
// Add this linebefore any environment variables are used
const dotenv = require('dotenv'); 
const bodyParser = require('body-parser');
const userRoutes = require('./routes/usersRoute');
dotenv.config(); // Add this line for the environment variables to be used
// Create express app
const app = express();
//if the environment variable PORT is not defined, the server will run on port 3000
// this is stored and defied in the config.env file
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));