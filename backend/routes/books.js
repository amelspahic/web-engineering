var express = require("express");
const BooksController = require("../controllers/BooksController");

var router = express.Router();

router.get("/", BooksController.getBooksPaged);
router.get("/:id", BooksController.bookDetail);
router.post("/", BooksController.bookStore);
router.put("/:id", BooksController.bookUpdate);
router.delete("/:id", BooksController.bookDelete);

module.exports = router;