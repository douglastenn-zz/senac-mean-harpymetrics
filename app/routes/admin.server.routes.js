'use strict';

var admin = require('../controllers/admin.server.controller');

module.exports = function(app) {
	app.get('/admin', admin.render);
};
