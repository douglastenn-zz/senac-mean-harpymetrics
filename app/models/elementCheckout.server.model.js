// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
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
		default: new Date().toJSON().slice(0,10)
    }
});


mongoose.model('ElementCheckout', ElementCheckoutSchema);