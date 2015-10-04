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
    }
});


mongoose.model('ElementCheckout', ElementCheckoutSchema);