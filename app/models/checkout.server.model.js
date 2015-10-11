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
    id: String,
    price: String,
    quantity: Number
});


mongoose.model('Checkout', CheckoutSchema);