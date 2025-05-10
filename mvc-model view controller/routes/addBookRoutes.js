const express = require("express");
const AddBooksController = require("../controllers/addBook");

const contactRouter = express.Router();

contactRouter.get("/add-book", AddBooksController.getAddBooks);

contactRouter.post("/add-book", AddBooksController.postAddBook);

exports.contactRouter = contactRouter;
