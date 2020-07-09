var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	firstName: {type: String, required: true},
	lastName: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model("Author", AuthorSchema);