const BookService = require("../services/books");
const apiResponse = require("../helpers/response");

exports.getBooks = async (req, res, next) => {
  try {
    const books = await BookService.getBooks({});
    return apiResponse.successResponse(res, books);
  } catch (err) {
    next(err);
  }
};

exports.getBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const book = await BookService.getBook(bookId);
    return apiResponse.successResponse(res, book);
  } catch (err) {
    next(err);
  }
};

exports.saveBook = async (req, res, next) => {
  try {
    const bookUpdate = {
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    };

    const book = await BookService.saveBook(bookUpdate);
    return apiResponse.successResponse(res, book);
  } catch (err) {
    next(err);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateProperties = {};
    for (const updProp of Object.keys(req.body)) {
      updateProperties[updProp] = req.body[updProp];
    }

    const book = await BookService.updateBook(id, updateProperties);
    return apiResponse.successResponse(res, book);
  } catch (err) {
    next(err);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    await BookService.deleteBook(bookId);
    return apiResponse.noContentResponse(res, "Successfully deleted");
  } catch (err) {
    next(err);
  }
};
