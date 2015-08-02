// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Customer = mongoose.model('Customer');

// Create a new 'render' controller method
exports.create = function(req, res) {
	var data = req.body;
	var customer = new Customer(data);

	customer.save(function(err) {
		if (err) {
			console.info('error',err);
		} else {
			console.info('Usuário Salvo', data.email)
			res.json(JSON.stringify(customer));
		}
	});

};

