'use strict';

var category = require('../controllers/category.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/:harpyid/category/most-acessed', isAuthenticated, category.listMostAcessed);
<<<<<<< HEAD
=======
    app.get('/:harpyid/category/most-acessed-of-day', isAuthenticated, category.listMostAcessedOfDay);
>>>>>>> 147d057fcf7e83f682d1c7bdb5408eb31ec9564b
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('#!/signin');
}
