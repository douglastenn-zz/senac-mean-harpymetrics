// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Element = mongoose.model('Element'),
    Product = mongoose.model('Product'),
    Relationship = mongoose.model('Relationship');

exports.listMoreAcessed = function(req, res) {
    
    ElementProduct.find().populate('element').populate('product').exec()
            .then(
                function(relationships) {
                    if(relationships) {
                        var productAcesseds = [];
                        for(relationship in relationships) {
                            var element = relationship.element;
                            var product = relationship.product;
                            if(element.hitType == 'detail') {
                                if(productAcesseds[product.id]) {
                                    productAcesseds[product.id] = 
                                        {product: product, quantity: productAcesseds[product.id].quantity + 1};
                                } else {
                                    productAcesseds[product.id] = {product: product, quantity: 1};
                                }
                            }
                        }
                        productAcesseds.sort(sortQuantity);
                    }
                },
                function(err) {
                    console.error(err);
                    res.status(500).json(err);
                }
             ); 
    
};

function sortQuantity(a,b) {
    return a.quantity - b.quantity;
}