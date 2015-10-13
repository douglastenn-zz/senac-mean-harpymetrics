// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
	Schema = mongoose.Schema;

var ElementCheckoutSchema = new Schema({
    element: {
        type: mongoose.Schema.ObjectId,
        ref: 'Element'
    },
    checkout: {
        type: mongoose.Schema.ObjectId,
        ref: 'Checkout'
    },
    createdAt: {
        type: String,
		default: moment(new Date()).format('YYYY-MM-DD')
    }
});


mongoose.model('ElementCheckout', ElementCheckoutSchema);