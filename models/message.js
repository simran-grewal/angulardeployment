var mongoose = require("mongoose");
var schema = mongoose.schema;
var schema = new schema({
    content: {type: String, required: true},
    user: {type: schema.Types.ObjectId, ref: "User"}

});

module.exports = mongoose.model('Message', schema);