'use strict';

var product = require('../controllers/product.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/product/most-acessed', isAuthenticated, product.listMostAcessed);
    app.get('/product/most-viewed', isAuthenticated, product.listMostViewed);
    app.get('/product/most-clicked', isAuthenticated, product.listMostClicked);
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('#!/signin');
}
