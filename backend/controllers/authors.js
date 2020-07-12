const AuthorService = require("../services/authors");
const apiResponse = require("../helpers/response");

exports.getAuthors = async (req, res, next) => {
  try {
    const authors = await AuthorService.getAuthors({});
    return apiResponse.successResponse(res, authors);
  } catch (err) {
    next(err);
  }
};

exports.getAuthor = async (req, res, next) => {
  try {
    const authorId = req.params.id;
    const author = await AuthorService.getAuthor(authorId);
    return apiResponse.successResponse(res, author);
  } catch (err) {
    next(err);
  }
};

exports.saveAuthor = async (req, res, next) => {
  try {
    const authorUpdate = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };

    const author = await AuthorService.saveAuthor(authorUpdate);
    return apiResponse.successResponse(res, author);
  } catch (err) {
    next(err);
  }
};

exports.updateAuthor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateProperties = {};
    for (const updProp of Object.keys(req.body)) {
      updateProperties[updProp] = req.body[updProp];
    }

    const author = await AuthorService.updateAuthor(id, updateProperties);
    return apiResponse.successResponse(res, author);
  } catch (err) {
    next(err);
  }
};

exports.deleteAuthor = async (req, res, next) => {
  try {
    const authorId = req.params.id;
    await AuthorService.deleteAuthor(authorId);
    return apiResponse.noContentResponse(res, {
      message: "Successfully deleted",
    });
  } catch (err) {
    next(err);
  }
};
