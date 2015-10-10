// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CheckoutSchema = new Schema({    
    transactionId: {
        type: String,
        required: true
    },
    revenue: String,
    tax: String,
    shipping: String,
    coupon: String,
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