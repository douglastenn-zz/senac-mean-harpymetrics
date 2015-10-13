'use strict';

var page = require('../controllers/page.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/:harpyid/page/most-acessed', isAuthenticated, page.listMostAcessed);
<<<<<<< HEAD
=======
    app.get('/:harpyid/page/most-acessed-of-day', isAuthenticated, page.listMostAcessedOfDay);
>>>>>>> 147d057fcf7e83f682d1c7bdb5408eb31ec9564b
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('#!/signin');
}
