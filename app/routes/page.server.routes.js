'use strict';

var page = require('../controllers/page.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/:harpyid/page/most-acessed', isAuthenticated, page.listMostAcessed);
    app.get('/:harpyid/page/most-acessed-of-day', isAuthenticated, page.listMostAcessedOfDay);
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('#!/signin');
}
