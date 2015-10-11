// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
    Element = mongoose.model('Element'),
    Search = mongoose.model('Product'),
    ElementSearch = mongoose.model('ElementSearch');

exports.listMostSearched = function(req, res) {
    var harpyid = req.params.harpyid;
    
    ElementSearch.find().populate('element search').exec()
            .then(
                function(relationships) {
                    if(relationships) {
                        var searcheds = [];
                         var searchTerms = [];
                        for (var i = 0, len = relationships.length; i < len; i++) {
                            var relationship = relationships[i];
                            var element = relationship.element;
                            var search = relationship.search;
                            if(element.harpyId == harpyid) {
                                 if(searcheds[search.searchTerm]) {
                                    searcheds[search.searchTerm] = 
                                        {search: search.searchTerm, quantity: searcheds[search.searchTerm].quantity + 1};
                                } else {
                                    searcheds[search.searchTerm] = {search: search.searchTerm, quantity: 1};
                                    searchTerms.push(search.searchTerm);
                                }
                            }
                        }
                        var searchedsArray = [];
                        for(var i = 0, len = searchTerms.length; i < len; i++) {
                            searchedsArray.push(searcheds[searchTerms[i]]);
                        }
                        searchedsArray.sort(sortQuantity);
                        console.log('searcheds', searchedsArray);
                        res.json(searchedsArray);
                    }
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

function cleanArray(actual){
  var newArray = new Array();
  for(var i = 0; i<actual.length; i++){
      if (actual[i]){
        newArray.push(actual[i]);
    }
  }
  return newArray;
}