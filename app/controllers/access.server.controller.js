// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	fs    	 = require("fs"),
	User = mongoose.model('User');

// Create a new 'render' controller method
exports.render = function(req, res) {
	res.render('access', {
		title: 'Harpymetrics - Login',
		user: JSON.stringify(req.user)
	});
};
