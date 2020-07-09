const Book = require("../models/book");
const apiResponse = require("../helpers/response");
const mongoose = require("mongoose");

exports.getBooksPaged = (req, res, next) => {
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

exports.getBook = (req, res, next) => {
  const bookId = req.params.id;

  Book.findById(bookId)
    .exec()
    .then((book) => {
      apiResponse.successResponse(res, book);
    });
};

exports.saveBook = (req, res, next) => {
  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    author: req.body.authorId,
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
