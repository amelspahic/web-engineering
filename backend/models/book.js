var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: {type: String, required: true},
	description: {type: String, required: true},
	author: {type: Schema.ObjectId, ref: "Author", required: true }
}, {timestamps: true});

module.exports = mongoose.model("Book", BookSchema);