const express = require("express");

const contactRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/path_utils");

contactRouter.get("/add-book", (req, res, next) => {
  console.log("Handling /add-book for get method: ", req.url, req.method);
  // res.sendFile(path.join(rootDir, "views", "contactForm.html"));
  res.render("addBook", { title: "Add Book" });
});

const addedBooks = [];
contactRouter.post("/add-book", (req, res, next) => {
  console.log("Book Added Successfully: ", req.body.bookname);
  console.log("Handling /add-book for POST method: ", req.url, req.method);
  console.log(req.body);
  //bohot sari chezen hmn push krni hogi to hum isy object men rakhty hn as key value pair
  addedBooks.push({bookDetails: req.body})
  // res.sendFile(path.join(rootDir, "views", "submitForm.html"));
  res.render("submitForm", { title: "greet" });
});

exports.contactRouter = contactRouter;
exports.addedBooks = addedBooks;
