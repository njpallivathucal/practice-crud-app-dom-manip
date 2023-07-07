//require in express
const express = require('express');
//assign app to invocation of express
const app = express();
//require in path
const path = require('path');
//require in the database connection file maybe???????

//The app.use() function adds a new middleware to the app. Essentially, whenever a request hits your backend, Express will execute the functions you passed to app.use() in order.

//ensures that just form inputs pass through correctly.
app.use(express.urlencoded({ extended: true })); //works for forms

//parses incoming JSON and puts that data into the request body.
app.use(express.json()); //doesnt work for forms

//require in the router file
const router = require('./routes/routes.js');

//assign the port#
const PORT = 3000;

// "use" routes go here
app.use('/', router);

// listen on correct port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
