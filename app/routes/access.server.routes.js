'use strict';

var customer = require('../controllers/customer.server.controller'),
    access = require('../controllers/access.server.controller');

module.exports = function(app) {
    app.route('/signin')
	   .get(access.renderSignin)
       .post(customer.signin);
};
