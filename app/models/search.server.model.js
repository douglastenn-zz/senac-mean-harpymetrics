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
    }
});


mongoose.model('Search', SearchSchema);