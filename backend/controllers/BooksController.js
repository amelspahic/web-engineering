const Book = require("../models/BookModel");
const apiResponse = require("../helpers/response");

var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

exports.getBooksPaged = {
    function(req, res) {
        try {
            Book.find({ author: req.author._id }, "_id title description createdAt").then((books) => {
                return apiResponse.successResponse(res, books);
            });
        } catch (err) {
            return apiResponse.serverErrorResponse(res, err);
        }
    }
}

function Book(values) {
    this.id = values._id;
    this.title = values.title;
    this.description = values.description;
    this.createdAt = data.createdAt;
}