const express = require("express");
const { bookController } = require("../controllers/bookController");

const bookRouter = express.Router();

bookRouter.get("/books", bookController);
module.exports = bookRouter;
