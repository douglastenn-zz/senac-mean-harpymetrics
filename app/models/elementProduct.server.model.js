// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ElementProductSchema = new Schema({
    element: {
        type: mongoose.Schema.ObjectId,
        ref: 'Element'
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    }
});


mongoose.model('ElementProduct', ElementProductSchema);