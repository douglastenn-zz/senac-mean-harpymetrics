'use strict';

var customer = require('../controllers/customer.server.controller'),
    access = require('../controllers/access.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.route('/signin')
	   .get(access.renderSignin)
       .post(passport.authenticate('login', {
		    successRedirect: '#!/admin',
		    failureRedirect: '/#!/signin',
		    failureFlash : true
		}));
    
    app.get('/signout', function (req, res){
      req.session.destroy(function (err) {
        res.redirect('/#!/'); //Inside a callback… bulletproof!
      });
    });
};

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/signin');
}
