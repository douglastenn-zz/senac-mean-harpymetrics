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
    generatePassword(customer);

	customer.save(function(err, customerSaved) {
		if (err) {
			console.info('error',err);
		} else {
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

exports.getMe = function(req, res) {
    Customer.findOne({token: req.token}, function(err, customer) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            console.log(customer);
            res.json({
                type: true,
                data: customer
            });
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

