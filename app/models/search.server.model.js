// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
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
		default: moment(new Date()).format('YYYY-MM-DD')
    }
});


mongoose.model('Search', SearchSchema);