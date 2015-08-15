'use strict';

var passport = require('passport');
var index = require('../controllers/index.server.controller');
var users = require('../../app/controllers/user.server.controller');

module.exports = function(app) {

	app.get('/', index.render);
};
