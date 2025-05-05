const express = require("express");

const contactRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/path_utils");

contactRouter.get("/contact", (req, res, next) => {
  console.log("Handling /contact for get method: ", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contactForm.html"));
});

const addedBooks = [];
contactRouter.post("/contact", (req, res, next) => {
  console.log("Book Added Successfully: ", req.body.bookname);
  console.log("Handling /contact for POST method: ", req.url, req.method);
  console.log(req.body);
  //bohot sari chezen hmn push krni hogi to hum isy object men rakhty hn as key value pair
  addedBooks.push({bookDetails: req.body})
  res.sendFile(path.join(rootDir, "views", "submitForm.html"));
});

exports.contactRouter = contactRouter;
exports.addedBooks = addedBooks;
