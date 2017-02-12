/*
var mongoose = require("mongoose");
var schema = mongoose.schema;
var mongooseUniqueValidator = require("mongoose-unique-validator");
var schema = new schema({
firstNam: {type: String, require: true},
    lastName: {type: String, require: true},
    password: {type: String, require: true},
    email: {type: String, require: true , unique: true},
    messages: [{type: schema.type.ObjectId,ref: 'Message'}]

});
schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);