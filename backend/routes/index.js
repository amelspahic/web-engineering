const express = require("express");
var app = express();

const { catchErrors } = require("../handlers/errorHandler");

var books = require("./books");
var authors = require("./authors");

app.use("/books/", books);
app.use("/authors/", authors);

module.exports = app;
