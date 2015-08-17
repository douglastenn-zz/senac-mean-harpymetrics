'use strict';

var customer = require('../controllers/customer.server.controller');

module.exports = function(app) {
	app.post('/customer/create', customer.create);
	app.post('/customer/signin', customer.signin);
};
