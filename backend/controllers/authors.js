const Author = require("../models/author");
const apiResponse = require("../helpers/response");
const mongoose = require("mongoose");
const author = require("../models/author");

exports.getAuthorsPaged = (req, res, next) => {
  Author.find()
    .exec()
    .then((authors) => {
      apiResponse.successResponse(res, authors);
    });
};

exports.getAuthor = (req, res, next) => {
  const authorId = req.params.id;

  Author.findById(authorId)
    .exec()
    .then((author) => {
      apiResponse.successResponse(res, author);
    });
};

exports.saveAuthor = (req, res, next) => {
  const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  author
    .save()
    .then((result) => {
      apiResponse.successResponse(res, result);
    })
    .catch((err) => {
      apiResponse.serverErrorResponse(res, err);
    });
};
