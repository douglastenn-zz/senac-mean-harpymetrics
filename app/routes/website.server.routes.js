'use strict';

var controller = require('../controllers/website.server.controller');

module.exports = function(app) {
    app.route('/websites')
        .get(isAuthenticated, controller.list)
        .post(isAuthenticated, controller.save);
    
    app.route('/websites/:harpyid')
        .get(isAuthenticated, controller.getWebsite);
    
    app.route('/websites/:id')
        .delete(isAuthenticated, controller.delete);
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/signin');
}
