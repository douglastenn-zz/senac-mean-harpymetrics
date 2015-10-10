// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Element = mongoose.model('Element'),
    Category = mongoose.model('Category'),
    ElementCategory = mongoose.model('ElementCategory');

exports.listMostAcessed = function(req, res) {
    
    ElementCategory.find().populate('element category').exec()
            .then(
                function(relationships) {
                    if(relationships) {
                        var categoryAcesseds = [];
                        for (var i = 0, len = relationships.length; i < len; i++) {
                            var relationship = relationships[i];
                            var element = relationship.element;
                            var category = relationship.category;
                            if(element.hitType == 'detail') {
                                if(categoryAcesseds[category.id]) {
                                    categoryAcesseds[category.id] = 
                                        {category: category, quantity: categoryAcesseds[category.id].quantity + 1};
                                } else {
                                    categoryAcesseds[category.id] = {category: category, quantity: 1};
                                }
                            }
                        }
                        categoryAcesseds = cleanArray(categoryAcesseds);
                        categoryAcesseds.sort(sortQuantity);
                        console.log(categoryAcesseds);
                        res.json(categoryAcesseds);
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