'use strict';

var product = require('../controllers/product.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/:harpyid/product/most-acessed', isAuthenticated, product.listMostAcessed);
<<<<<<< HEAD
=======
    app.get('/:harpyid/product/most-acessed-of-day', isAuthenticated, product.listMostAcessedOfDay);
>>>>>>> 147d057fcf7e83f682d1c7bdb5408eb31ec9564b
    app.get('/:harpyid/product/most-viewed', isAuthenticated, product.listMostViewed);
    app.get('/:harpyid/product/most-clicked', isAuthenticated, product.listMostClicked);
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('#!/signin');
}
