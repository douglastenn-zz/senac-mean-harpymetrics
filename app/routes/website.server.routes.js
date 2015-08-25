'use strict';

var controller = require('../controllers/website.server.controller');

module.exports = function(app) {
    app.route('/websites')
        .get(ensureAuthorized, controller.list)
        .post(ensureAuthorized, controller.save);
    
    app.route('/websites/:id')
//        .get(ensureAuthorized, controller.getWebsite)
        .delete(isAuthenticated, controller.remove);
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/signin');
}
