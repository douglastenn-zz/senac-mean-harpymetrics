// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
    crypto = require('crypto'),
	Customer = mongoose.model('Customer');

// Create a new 'render' controller method
exports.create = function(req, res) {
	var data = req.body;
	var customer = new Customer(data);
    generatePassword(customer);

	customer.save(function(err, customerSaved) {
		if (err) {
			console.info('error',err);
		} else {
            res.json(JSON.stringify(customer));
		}
	});
};

// Use a pre-save middleware to hash the password
function generatePassword(customer) {
	if (customer.password) {
		customer.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		customer.password = encryptPassword(customer.password, customer.salt);
	}
};

// Create an instance method for hashing a password
function encryptPassword(password, salt) {
	return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
};

