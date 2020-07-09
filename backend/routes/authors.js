var express = require("express");
const apiResponse = require("../helpers/response");
const AuthorsController = require("../controllers/authors");

var router = express.Router();

router.get("/", AuthorsController.getAuthorsPaged);
router.get("/:id", AuthorsController.getAuthor);
router.post("/", AuthorsController.saveAuthor);

module.exports = router;
