// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	fs    	 = require("fs"),
	User = mongoose.model('User');

// Create a new 'render' controller method
//exports.render = function(req, res) {
//	res.render('access', {
//		title: 'Harpymetrics - Login',
//		user: JSON.stringify(req.user)
//	});
//};

// Create a new controller method that renders the signin page
exports.renderSignin = function(req, res, next) {
	// If user is not connected render the signin page, otherwise redirect the user back to the main application page
	if (!req.user) {
		// Use the 'response' object to render the signin page
		res.render('access', {
			// Set the page title variable
			title: 'Harpymetrics - Login',
			// Set the flash message variable
			messages: req.flash('error') || req.flash('info')
		});
	} else {
		return res.redirect('/');
	}
};
