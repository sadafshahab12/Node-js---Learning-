const express = require("express");
const { getAddBook, postAddBook } = require("../controllers/adminController/addBookController");


const addBookRoute = express.Router();

addBookRoute.get("/add-book", getAddBook);
addBookRoute.post("/add-book", postAddBook);

module.exports = addBookRoute;
