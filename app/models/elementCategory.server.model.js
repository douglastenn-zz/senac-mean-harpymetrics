// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
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
		default: new Date().toJSON().slice(0,10)
    }
});


mongoose.model('ElementCategory', ElementCategorySchema);