
// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var	config = require('./config'),
	mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	var db = mongoose.connect(config.db);

	// Load the application models 
	require('../app/models/user.server.model');
	require('../app/models/customer.server.model');
    require('../app/models/website.server.model');
    require('../app/models/element.server.model');
    require('../app/models/product.server.model');
    require('../app/models/category.server.model');
    require('../app/models/search.server.model');
    require('../app/models/checkout.server.model');
    require('../app/models/elementProduct.server.model');
    require('../app/models/elementCategory.server.model');
    require('../app/models/elementSearch.server.model');
    require('../app/models/elementCheckout.server.model');

	// Return the Mongoose connection instance
	return db;
}