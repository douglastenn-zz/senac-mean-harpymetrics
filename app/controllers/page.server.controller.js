// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
	Element = mongoose.model('Element');

exports.listMostAcessed = function(req, res) {
    var harpyid = req.params.harpyid;
    
    Element.find({hitType: 'detail'}).exec()
            .then(
                function(elements) {
                    if(elements) {
                        var pageAcesseds = [];
                        var pageTypes = [];
                        for (var i = 0, len = elements.length; i < len; i++) {
                            var element = elements[i];
                            if(element.harpyId == harpyid) {
                                if(pageAcesseds[element.pageType]) {
                                    pageAcesseds[element.pageType] = 
                                        {page: element.pageType, quantity: pageAcesseds[element.pageType].quantity + 1};
                                } else {
                                    pageTypes.push(element.pageType);
                                    pageAcesseds[element.pageType] = {page: element.pageType, quantity: 1};
                                }
                            }
                        }
                    }
                    var pageAcessedsArray = [];
                    for(var i = 0, len = pageTypes.length; i < len; i++) {
                        pageAcessedsArray.push(pageAcesseds[pageTypes[i]]);
                    }
                    pageAcessedsArray.sort(sortQuantity);
                    console.log('pageAcesseds', pageAcessedsArray);
                    res.json(pageAcessedsArray);
                },
                function(err) {
                    console.error(err);
                    res.status(500).json(err);
                }
             ); 
    
};

exports.listMostAcessedOfDay = function(req, res) {
    var harpyid = req.params.harpyid;
    var today = moment(new Date()).format('YYYY-MM-DD');
    
    Element.find({hitType: 'detail', createdAt: today}).exec()
            .then(
                function(elements) {
                    if(elements) {
                        var pageAcesseds = [];
                        var pageTypes = [];
                        for (var i = 0, len = elements.length; i < len; i++) {
                            var element = elements[i];
                            if(element.harpyId == harpyid) {
                                if(pageAcesseds[element.pageType]) {
                                    pageAcesseds[element.pageType] = 
                                        {page: element.pageType, quantity: pageAcesseds[element.pageType].quantity + 1};
                                } else {
                                    pageTypes.push(element.pageType);
                                    pageAcesseds[element.pageType] = {page: element.pageType, quantity: 1};
                                }
                            }
                        }
                    }
                    var pageAcessedsArray = [];
                    for(var i = 0, len = pageTypes.length; i < len; i++) {
                        pageAcessedsArray.push(pageAcesseds[pageTypes[i]]);
                    }
                    pageAcessedsArray.sort(sortQuantity);
                    console.log('pageAcesseds', pageAcessedsArray);
                    res.json(pageAcessedsArray);
                },
                function(err) {
                    console.error(err);
                    res.status(500).json(err);
                }
             ); 
    
};

function sortQuantity(a,b) {
    return b.quantity - a.quantity;
}