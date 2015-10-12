// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SearchSchema = new Schema({
    searchTerm: {
        type: String,
        required: true
    },
    totalResult: {
        type: Number,
        required: true
    },
    createdAt: {
        type: String,
		default: new Date().toJSON().slice(0,10)
    }
});


mongoose.model('Search', SearchSchema);