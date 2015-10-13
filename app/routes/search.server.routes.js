'use strict';

var search = require('../controllers/search.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/:harpyid/search/most-searched', isAuthenticated, search.listMostSearched);
<<<<<<< HEAD
=======
    app.get('/:harpyid/search/most-searched-of-day', isAuthenticated, search.listMostSearchedOfDay);
>>>>>>> 147d057fcf7e83f682d1c7bdb5408eb31ec9564b
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('#!/signin');
}
