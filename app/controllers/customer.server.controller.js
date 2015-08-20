// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	jwt = require('jsonwebtoken'),
    crypto = require('crypto'),
	Customer = mongoose.model('Customer');

// Create a new 'render' controller method
exports.create = function(req, res) {
	var data = req.body;
	var customer = new Customer(data);

	console.log(customer);

	customer.save(function(err, customerSaved) {
		if (err) {
			console.info('error',err);
		} else {
			console.log("ID:" + customerSaved._id);
			customerSaved.token = jwt.sign(customerSaved, 'shhhhhhhhh');
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
    
	Customer.findOne({username: login.username}, function(err, customer) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (customer) {
                var password = crypto.pbkdf2Sync(login.password, customer.salt, 10000, 64).toString('base64');
                console.log(password);
                console.log(customer.password)
                if(password == customer.password) {
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
            } else {
                res.json({
                    type: false,
                    data: "Incorrect username/password"
                });
            }
        }
    });
};

