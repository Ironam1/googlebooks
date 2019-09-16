const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// set "/" route
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

//   set "/:id" route
router
  .route(":/id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

  module.exports = router;