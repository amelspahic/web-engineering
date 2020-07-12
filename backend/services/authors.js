const Author = require("../models/author");
const mongoose = require("mongoose");

exports.getAuthors = async (query) => {
  const authors = await Author.find(query).exec();
  return authors;
};

exports.getAuthor = async (id) => {
  const author = await Author.findById(id).exec();
  return author;
};

exports.saveAuthor = async (authorInsert) => {
  const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    firstName: authorInsert.firstName,
    lastName: authorInsert.lastName,
  });

  const savedAuthor = await author.save();
  return savedAuthor;
};

exports.updateAuthor = async (id, authorUpdate) => {
  const author = await Author.updateOne(
    { _id: id },
    { $set: authorUpdate }
  ).exec();
  return author;
};

exports.deleteAuthor = async (id) => {
  await Author.deleteOne({ _id: id }).exec();
};
