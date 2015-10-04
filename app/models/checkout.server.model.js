// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CheckoutSchema = new Schema({
    product: [{
        id: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
});


mongoose.model('Checkout', CheckoutSchema);