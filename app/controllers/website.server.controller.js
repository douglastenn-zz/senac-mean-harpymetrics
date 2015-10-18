// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Website = mongoose.model('Website'),
    sanitize = require('mongo-sanitize');

exports.list = function(req, res) {
    Website.find({customer: req.user._id}).exec()
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

exports.getWebsite = function(req, res) {
    var harpyid = req.params.harpyid;
    
    Website.findOne({harpyid: harpyid}).exec()
        .then(
            function(website) {
                if(!website) throw new Error('Website não encontrado.');
                console.log('website', website);
                res.json(website);
            },
            function(err) {
                console.error(err);
                res.status(500).json(err);
            }
         );
};

exports.save = function(req, res) {
	var data = req.body;
	var website = new Website(data);
    website.customer = req.user._id;

	website.save(function(err, website) {
		if (err) {
			console.info('error',err);
		} else {
            console.info('Website Salvo', website.name);
			res.json(JSON.stringify(website));
		}
	});
};

exports.delete = function(req, res) {
    var _id = sanitize(req.params.id);
    website.remove({'_id' : _id}).exec()
        .then(
            function() {
                res.end();
            },
            function(erro) {
                return console.error(erro);
            }
        );
};