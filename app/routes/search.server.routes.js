'use strict';

var search = require('../controllers/search.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/:harpyid/search/most-searched', isAuthenticated, search.listMostSearched);
    app.get('/:harpyid/search/most-searched-of-day', isAuthenticated, search.listMostSearchedOfDay);
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('#!/signin');
}
