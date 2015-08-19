'use strict';

var customer = require('../controllers/access.server.controller');

module.exports = function(app) {
	app.post('/access/login', login.render);
};
