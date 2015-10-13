// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
	Schema = mongoose.Schema;

var ProductSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: Number,
    list: String,
    category: String,
    variant: String,
    brand: String,
    position: Number,
    createdAt: {
        type: String,
		default: moment(new Date()).format('YYYY-MM-DD')
    }
});


mongoose.model('Product', ProductSchema);