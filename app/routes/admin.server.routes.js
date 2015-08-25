'use strict';

var admin = require('../controllers/admin.server.controller');

module.exports = function(app) {
	app.get('/admin', isAuthenticated, admin.render);
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}