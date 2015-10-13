'use strict';

var category = require('../controllers/category.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/:harpyid/category/most-acessed', isAuthenticated, category.listMostAcessed);
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('#!/signin');
}
