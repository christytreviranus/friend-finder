//Dependencies 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Configurations for Express
const app = express();
const PORT = process.env.PORT || 8080;

//Access to Public Dir for CSS
app.use(express.static(path.join(__dirname, './app/public')));

// Use body-parser to parse data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Sun Valley Friend Finder is listening on PORT: ' + PORT);
});


