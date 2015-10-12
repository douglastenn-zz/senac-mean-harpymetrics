// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Element = mongoose.model('Element'),
    Product = mongoose.model('Product'),
    Category = mongoose.model('Category'),
    Search = mongoose.model('Search'),
    Checkout = mongoose.model('Checkout'),
    ElementProduct = mongoose.model('ElementProduct'),
    ElementCategory = mongoose.model('ElementCategory'),
    ElementSearch = mongoose.model('ElementSearch'),
    ElementCheckout = mongoose.model('ElementCheckout');

exports.save = function(req, res) {
    var data = getData(req);
    var element = new Element(data);
    element.save(function(err, elementSaved) {
        if (err) {
            console.info('error', err);
        } else {
            console.info('Objeto Elemento Salvo');
            saveProps(data.props, elementSaved);
        }
    }); 
    
};

function saveProps(props, element) {
    if(props.product != undefined && props.product != null) {
        saveProducts(props.product, element);
    }
    if(props.category != undefined && props.category != null) {
        saveCategories(props.category, element);
    }
    if(props.search != undefined && props.search != null) {
        saveSearchs(props.search, element);
    }
    if(props.checkout != undefined && props.checkout != null) {
        saveCheckouts(props.checkout, element);
    }
}

function saveProducts(products, element) {    
    for (var i = 0, len = products.length; i < len; i++) {
        var product = products[i];
        Product.findOne({id: product.id}).exec()
            .then(
                function(productSaved) {
                    if(!productSaved) {
                        productSaved = new Product(product);
                        productSaved.save(function(err, productSaved) {
                            if (err) {
                                console.info('error', err);
                            } else {
                                console.info('Objeto Product Salvo');
                            }
                        });
                    }
                    var relationship = new ElementProduct({
                        element: element,
                        product: productSaved
                    });
                    saveRelationship(relationship);
                },
                function(err) {
                    console.error(err);
                    res.status(500).json(err);
                }
             ); 
    }
}

function saveCategories(categories, element) {     
    for (var i = 0, len = categories.length; i < len; i++) {
        var category = categories[i];
        Category.findOne({id: category.id}).exec()
            .then(
                function(categorySaved) {
                    if(!categorySaved) {
                        categorySaved = new Category(category);
                        categorySaved.save(function(err, categorySaved) {
                            if (err) {
                                console.info('error', err);
                            } else {
                                console.info('Objeto Category Salvo');
                            }
                        });
                    }
                    var relationship = new ElementCategory({
                        element: element,
                        category: categorySaved
                    });
                    saveRelationship(relationship);
                },
                function(err) {
                    res.status(500).json(err);
                }
             ); 
    }
}

function saveSearchs(searchs, element) {
    var search = searchs[0];
    search = new Search(search);
    search.save(function(err, search) {
        if (err) {
            console.info('error', err);
        } else {
            console.info('Objeto Search Salvo');
            var relationship = new ElementSearch({
                element: element,
                search: search
            });
            saveRelationship(relationship);
        }
    });
}

function saveCheckouts(checkouts, element) {    
    var checkout = checkouts[0];
    checkout = new Checkout(checkout);
    checkout.save(function(err, checkout) {
        if (err) {
            console.info('error', err);
        } else {
            console.info('Objeto Checkout Salvo');
            var relationship = new ElementCheckout({
                element: element,
                checkout: checkout
            });
            saveRelationship(relationship);
        }
    });
}

function saveRelationship(relationship) {
    saveObject(relationship, 'Relationship');
}

function saveObject(object, name) {
    object.save(function(err, object) {
        if (err) {
            console.info('error', err);
        } else {
            console.info('Objeto ' + name + ' Salvo');
            return object;
        }
    });    
}

function getData(req) {
    var result = null;
    if(req.body.harpyId) {
        result = req.body;
    } else if(req.query.harpyId) {
        result = req.query;
    }
    return result;
}