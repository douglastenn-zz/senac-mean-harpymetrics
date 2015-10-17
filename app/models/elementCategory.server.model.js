// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
	Schema = mongoose.Schema;

var ElementCategorySchema = new Schema({
    element: {
        type: mongoose.Schema.ObjectId,
        ref: 'Element'
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    createdAt: {
        type: String,
		default: moment(new Date()).format('YYYY-MM-DD')
    }
});


mongoose.model('ElementCategory', ElementCategorySchema);