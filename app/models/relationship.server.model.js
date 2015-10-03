// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var RelationshipSchema = new Schema({
    element: {
        type: mongoose.Schema.ObjectId,
        ref: 'Element'
    },
    relatedId: {
        type: String,
        required: true
    },
    relatedType: {
        type: String,
        required: true
    }
});


mongoose.model('Relationship', RelationshipSchema);