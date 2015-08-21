'use strict';

var customer = require('../controllers/admin.server.controller');

module.exports = function(app) {
	app.post('/admin', admin.render);
};
