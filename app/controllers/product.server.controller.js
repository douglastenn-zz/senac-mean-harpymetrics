// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Element = mongoose.model('Element'),
    Product = mongoose.model('Product'),
    ElementProduct = mongoose.model('ElementProduct');

exports.listMostAcessed = function(req, res) {
    
    ElementProduct.find().populate('element product').exec()
            .then(
                function(relationships) {
                    if(relationships) {
                        var productAcesseds = [];
                        for (var i = 0, len = relationships.length; i < len; i++) {
                            var relationship = relationships[i];
                            var element = relationship.element;
                            var product = relationship.product;
                            if(element.hitType.toLowerCase() == 'detail') {
                                if(productAcesseds[product.id]) {
                                    productAcesseds[product.id] = 
                                        {product: product, quantity: productAcesseds[product.id].quantity + 1};
                                } else {
                                    productAcesseds[product.id] = {product: product, quantity: 1};
                                }
                            }
                        }
                        productAcesseds = cleanArray(productAcesseds);
                        productAcesseds.sort(sortQuantity);
                        console.log(productAcesseds);
                        res.json(productAcesseds);
                    }
                },
                function(err) {
                    console.error(err);
                    res.status(500).json(err);
                }
             ); 
    
};

exports.listMostViewed = function(req, res) {
    
    ElementProduct.find().populate('element product').exec()
            .then(
                function(relationships) {
                    if(relationships) {
                        var productAcesseds = [];
                        for (var i = 0, len = relationships.length; i < len; i++) {
                            var relationship = relationships[i];
                            var element = relationship.element;
                            var product = relationship.product;
                            if(element.hitType.toLowerCase() == 'view') {
                                if(productAcesseds[product.id]) {
                                    productAcesseds[product.id] = 
                                        {product: product, quantity: productAcesseds[product.id].quantity + 1};
                                } else {
                                    productAcesseds[product.id] = {product: product, quantity: 1};
                                }
                            }
                        }
                        productAcesseds = cleanArray(productAcesseds);
                        productAcesseds.sort(sortQuantity);
                        console.log(productAcesseds);
                        res.json(productAcesseds);
                    }
                },
                function(err) {
                    console.error(err);
                    res.status(500).json(err);
                }
             ); 
    
};

exports.listMostClicked = function(req, res) {
    
    ElementProduct.find().populate('element product').exec()
            .then(
                function(relationships) {
                    if(relationships) {
                        var productAcesseds = [];
                        for (var i = 0, len = relationships.length; i < len; i++) {
                            var relationship = relationships[i];
                            var element = relationship.element;
                            var product = relationship.product;
                            if(element.hitType.toLowerCase() == 'click') {
                                if(productAcesseds[product.id]) {
                                    productAcesseds[product.id] = 
                                        {product: product, quantity: productAcesseds[product.id].quantity + 1};
                                } else {
                                    productAcesseds[product.id] = {product: product, quantity: 1};
                                }
                            }
                        }
                        productAcesseds = cleanArray(productAcesseds);
                        productAcesseds.sort(sortQuantity);
                        console.log(productAcesseds);
                        res.json(productAcesseds);
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