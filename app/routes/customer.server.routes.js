'use strict';

function ensureAuthorized(req, res, next) {
    console.log('verify')
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send(403);
    }
}

var customer = require('../controllers/customer.server.controller');

module.exports = function(app) {
	app.post('/customer/create', customer.create);
	//app.post('/customer/signin', customer.signin);
};
