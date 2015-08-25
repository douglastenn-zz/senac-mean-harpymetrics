// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
    crypto = require('crypto'),
	Schema = mongoose.Schema;

// Define a new 'WebsiteSchema'
var WebsiteSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
    harpyid: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		// Create a default 'created' value
		default: Date.now
	}
});

// Use a pre-save middleware to generate a harpyid
WebsiteSchema.pre('save', function(next) {
	if (this.harpyid == null || this.harpyid == '' || this.harpyid == undefined) {
		this.harpyid = this.generateHarpyid();
	}

	next();
});

// Create an instance method for generate a harpyid
WebsiteSchema.methods.generateHarpyid = function() {
    var LENGHT_HARPYID = 7;
    return crypto.randomBytes(Math.ceil(LENGHT_HARPYID/2))
        .toString('hex')
        .slice(0,LENGHT_HARPYID);
};

// Create the 'Website' model out of the 'WebsiteSchema'
mongoose.model('Website', WebsiteSchema);