// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
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
		default: moment(new Date()).format('YYYY-MM-DD')
    }
});


mongoose.model('Checkout', CheckoutSchema);