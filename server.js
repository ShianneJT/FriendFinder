// Dependencies
var express = require('express');
var path = require('path');

// Express setup
var app = express();
var PORT = process.env.PORT || 3000;

// Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));

// Routes
require(path.join(__dirname, './app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);

// Listener
app.listen(PORT, function() {
    console.log('App is listening on PORT: ' + PORT);
});
