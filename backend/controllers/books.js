const Book = require("../models/book");
const apiResponse = require("../helpers/response");
const mongoose = require("mongoose");

exports.getBooksPaged = (req, res) => {
	try {
		Book.find()
			.populate("author", "firstName lastName")
			.exec()
			.then((books) => {
				apiResponse.successResponse(res, books);
			});
	} catch (err) {
		return apiResponse.serverErrorResponse(res, err);
	}
};

exports.getBook = (req, res) => {
	const bookId = req.params.id;

	Book.findById(bookId)
		.exec()
		.then((book) => {
			apiResponse.successResponse(res, book);
		});
};

exports.saveBook = (req, res) => {
	const book = new Book({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		description: req.body.description,
		author: req.body.author,
	});

	book
		.save()
		.then((result) => {
			apiResponse.successResponse(res, result);
		})
		.catch((err) => {
			apiResponse.serverErrorResponse(res, err);
		});
};

exports.updateBook = (req, res) => {
	const id = req.params.id;
	const updateProperties = {};
	for (const updProp of Object.keys(req.body)) {
		updateProperties[updProp] = req.body[updProp];
	}

	Book.updateOne({ _id: id }, { $set: updateProperties })
		.exec()
		.then((result) => {
			apiResponse.successResponse(res, result);
		})
		.catch((err) => {
			apiResponse.serverErrorResponse(res, err);
		});
};

exports.deleteBook = (req, res) => {
	const id = req.params.id;
	Book.deleteOne({ _id: id })
		.exec()
		.then((result) => {
			apiResponse.noContentResponse(res, result);
		})
		.catch((err) => {
			console.log("fail", err);
			apiResponse.serverErrorResponse(res, err);
		});
};
