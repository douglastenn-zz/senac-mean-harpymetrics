// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Customer = mongoose.model('Customer');

// Create a new 'render' controller method
exports.create = function(req, res) {
	var data = req.body;
	var customer = new Customer(data);

	customer.save(function(err, customerSaved) {
		if (err) {
			console.info('error',err);
		} else {
			customerSaved.token = jwt.sign(customerSaved, process.env.JWT_SECRET);
            customerSaved.save(function(err, customerWithToken) {
            	console.info('Usuário Salvo', customerWithToken.email);
                res.json({
                    type: true,
                    data: customerWithToken,
                    token: customerWithToken.token
                });
            });
			//res.json(JSON.stringify(customer));
		}
	});
};

exports.signin = function(req, res) {
	var login = new Customer(req.body);
	Customer.findOne({username: user.username, password: user.password}, function(err, customer) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (customer) {
               res.json({
                    type: true,
                    data: customer,
                    token: customer.token
                });
            } else {
                res.json({
                    type: false,
                    data: "Incorrect username/password"
                });
            }
        }
    });
};

