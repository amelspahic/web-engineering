var express = require("express");
const apiResponse = require('../helpers/response');
const BooksController = require('../controllers/books');

var router = express.Router();

router.get("/", BooksController.getBooksPaged);
router.post("/", BooksController.saveBook);

module.exports = router;