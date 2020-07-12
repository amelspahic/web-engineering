const Book = require("../models/book");
const mongoose = require("mongoose");

exports.getBooks = async (query) => {
  const books = await Book.find(query)
    .populate("author", "firstName lastName")
    .exec();
  return books;
};

exports.getBook = async (id) => {
  const book = await Book.findById(id).exec();
  return book;
};

exports.saveBook = async (bookInsert) => {
  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    title: bookInsert.title,
    description: bookInsert.description,
    author: bookInsert.author,
  });

  const savedBook = await book.save();
  return savedBook;
};

exports.updateBook = async (id, bookUpdate) => {
  const book = await Book.updateOne({ _id: id }, { $set: bookUpdate }).exec();
  return book;
};

exports.deleteBook = async (id) => {
  await Book.deleteOne({ _id: id }).exec();
};
