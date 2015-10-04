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
    }
});


mongoose.model('ElementCategory', ElementCategorySchema);