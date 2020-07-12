const express = require("express");
const app = express();

const books = require("./books");
const authors = require("./authors");

app.use("/books/", books);
app.use("/authors/", authors);

module.exports = app;
