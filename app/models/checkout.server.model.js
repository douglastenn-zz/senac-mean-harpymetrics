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
    quantity: Number,
    createdAt: {
        type: String,
		default: new Date().toJSON().slice(0,10)
    }
});


mongoose.model('Checkout', CheckoutSchema);