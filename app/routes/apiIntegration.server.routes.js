'use strict';

var controller = require('../controllers/apiIntegration.server.controller');

module.exports = function(app) {
    app.post('/save', controller.save);
};