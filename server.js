
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// modules =================================================
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

var mongoose = require('./config/mongoose'),
	express  = require('./config/express'),
	passport = require('./config/passport');

// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express(db);

// Configure the Passport middleware
var passport = passport();

// set our port
var port = process.env.PORT || 8080; 

// start app ===============================================
app.listen(port);               
                  
console.log('Harpymetrics running on port ' + port);
       
exports = module.exports = app;  