const Author = require("../models/author");
const apiResponse = require("../helpers/response");
const mongoose = require("mongoose");

exports.getAuthorsPaged = (req, res, next) => {
  try {
    Author.find()
      .exec()
      .then((authors) => {
        apiResponse.successResponse(res, authors);
      });
  } catch (err) {
    return apiResponse.serverErrorResponse(res, err);
  }
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

exports.updateAuthor = (req, res, next) => {
  const id = req.params.id;
  const updateProperties = {};
  for (const updProp of Object.keys(req.body)) {
    updateProperties[updProp] = req.body[updProp];
  }

  Author.updateOne({ _id: id }, { $set: updateProperties })
    .exec()
    .then((result) => {
      apiResponse.successResponse(res, result);
    })
    .catch((err) => {
      apiResponse.serverErrorResponse(res, err);
    });
};

exports.deleteAuthor = (req, res, next) => {
  const id = req.params.id;
  Author.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      apiResponse.noContentResponse(res, result);
    })
    .catch((err) => {
      apiResponse.serverErrorResponse(res, err);
    });
};
