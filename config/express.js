// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var config = require('./config'),
	http = require('http'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	session = require('express-session'),
	MongoStore = require('connect-mongo')(session),
	flash = require('connect-flash'),
	passport = require('passport'),
	expressSession = require('express-session');

// Define the Express configuration method
module.exports = function(db) {
	// Create a new Express application instance
	var app = express();
	
	// Create a new HTTP server
    var server = http.createServer(app);
    
	// Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	// Use the 'body-parser' and 'method-override' middleware functions
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());


	// Configure the MongoDB session storage
	var mongoStore = new MongoStore({
        db: db.connection.db
    });

	// Configure the 'session' middleware
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret,
		store: mongoStore
	}));

	// Set the application view engine and 'views' folder
	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	// Configure the flash messages middleware
	app.use(flash());

	// Configure the Passport middleware
	app.use(expressSession({secret: 'minhaChaveSecreta'}));
	app.use(passport.initialize());
	app.use(passport.session());

	var initPassport = require('./passport/init');
	initPassport(passport);

	// Load the routing files
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/user.server.routes.js')(app);
	require('../app/routes/customer.server.routes.js')(app);
    require('../app/routes/access.server.routes.js')(app);
	require('../app/routes/admin.server.routes.js')(app);
    require('../app/routes/website.server.routes.js')(app);
    require('../app/routes/apiIntegration.server.routes.js')(app);
    require('../app/routes/product.server.routes.js')(app);
    require('../app/routes/category.server.routes.js')(app);
    require('../app/routes/page.server.routes.js')(app);
    require('../app/routes/search.server.routes.js')(app);
    require('../app/routes/navigation.server.routes.js')(app);
	
	// Configure static file serving
	app.use(express.static('./public'));

	// Return the Server instance
	return server;
};