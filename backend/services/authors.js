var Author = require("../models/author");

exports.getAuthors = async (query) => {
  try {
    var authors = await Author.find(query).exec();
    return authors;
  } catch (e) {
    throw Error("Error while Paginating Users");
  }
};

exports.getAuthor = async (id) => {
  try {
    var author = await Author.findById(id).exec();
    return author;
  } catch (e) {
    throw Error(`Error while getting the author with id: ${id}`);
  }
};

exports.saveAuthor = async (authorReq) => {
  try {
    const author = new Author({
      _id: new mongoose.Types.ObjectId(),
      firstName: authorReq.firstName,
      lastName: authorReq.lastName,
    });

    await author.save().exec();
    return author;
  } catch (e) {
    throw Error("Error inserting author");
  }
};
