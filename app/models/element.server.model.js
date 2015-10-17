// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
    moment = require('moment'),
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
    duration: Number,
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
		default: moment(new Date()).format('YYYY-MM-DD')
    },
    userStep: Number
});

// Use a pre-save middleware to hash the duration
ElementSchema.pre('save', function(next) { 
    var start = moment(this.startTimestamp);
    var end = moment(this.timestamp);
    this.duration = moment.duration(end.diff(start)).asSeconds();;

	next();
});


mongoose.model('Element', ElementSchema);