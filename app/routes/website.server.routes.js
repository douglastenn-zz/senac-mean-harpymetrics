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

var controller = require('../controllers/website.server.controller');

module.exports = function(app) {
    app.route('/websites')
        .get(ensureAuthorized, controller.listWebsites)
        .post(ensureAuthorized, controller.save);
    
//    app.route('/websites/:id')
//        .get(ensureAuthorized, controller.getWebsite)
//        .delete(ensureAuthorized, controller.removeWebsite);
};
