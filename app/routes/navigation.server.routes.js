'use strict';

var navigation = require('../controllers/navigation.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/:harpyid/navigationsDetails', isAuthenticated, navigation.navigationsDetails);
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('#!/signin');
}
