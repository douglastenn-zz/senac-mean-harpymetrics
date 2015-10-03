// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CategorySchema = new Schema({
    id: String,
    name: String
});


mongoose.model('Category', CategorySchema);