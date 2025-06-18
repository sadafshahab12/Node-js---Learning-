const express = require("express");
const {
  bookListController,
} = require("../controllers/storeController/bookListController");

const bookListRouter = express.Router();

bookListRouter.get("/book-list", bookListController);
module.exports = bookListRouter;
