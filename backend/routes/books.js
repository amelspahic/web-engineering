var express = require("express");
const BooksController = require("../controllers/books");

var router = express.Router();

router.get("/", BooksController.getBooksPaged);
router.get("/:id", BooksController.getBook);
router.post("/", BooksController.saveBook);
router.patch("/:id", BooksController.updateBook);
router.delete("/:id", BooksController.deleteBook);

module.exports = router;
