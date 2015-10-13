// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define a new 'CustomerSchema'
var ElementSchema = new Schema({
    event: {
        type: String,
		required: true
	},
    hitType: {
        type: String,
		required: true
	},
    harpyId: {
        type: String,
		required: true
	},
	timestamp: {
        type: Date,
		required: true
	},
	startTimestamp: {
        type: Date,
		required: true
	},
	pageType: {
        type: String,
		required: true
	},
    deviceType: {
        type: String,
		required: true
	},
	scrollDepth: {
        type: Number,
		required: true
	},
	title: {
        type: String,
		required: true
	},
	referrerTitle: String,
	url: {
        type: String,
		required: true
	},
	referrerURL: String,
    userId: {
        type: Number,
		required: true
	},
    createdAt: {
        type: String,
		default: new Date().toJSON().slice(0,10)
    }
});


mongoose.model('Element', ElementSchema);