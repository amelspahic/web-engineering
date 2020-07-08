const express = require("express");
const router = express.Router();

const { catchErrors } = require("../handlers/errorHandler");

const { getBooks, getBook } = require("./books");
const { getAuthor, getAuthors } = require("./authors");

router.get("/", catchErrors(getBooks));



module.exports = router;