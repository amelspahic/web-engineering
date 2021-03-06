const express = require("express");
const AuthorsController = require("../controllers/authors");

const router = express.Router();

router.get("/", AuthorsController.getAuthors);
router.get("/:id", AuthorsController.getAuthor);
router.post("/", AuthorsController.saveAuthor);
router.patch("/:id", AuthorsController.updateAuthor);
router.delete("/:id", AuthorsController.deleteAuthor);

module.exports = router;
