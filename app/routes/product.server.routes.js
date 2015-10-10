'use strict';

var product = require('../controllers/product.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/product/more-acessed', isAuthenticated, product.listMoreAcessed);
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('#!/signin');
}
