// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Website = mongoose.model('Website');

// Create a new 'render' controller method
exports.save = function(req, res) {
	var data = req.body;
	var website = new Website(data);

	website.save(function(err, website) {
		if (err) {
			console.info('error',err);
		} else {
            console.info('Website Salvo', website.name);
			res.json(JSON.stringify(website));
		}
	});
};

exports.listWebsites = function(req, res) {
    Website.find().exec()
        .then(
            function(websites) {
                res.json(websites);
            },
            function(err) {
                console.error(err);
                res.status(500).json(err);
            }
         );
};