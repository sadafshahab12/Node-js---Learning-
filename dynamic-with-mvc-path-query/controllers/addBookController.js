const { AddBooks } = require("../../mvc-practice/model/books");

exports.getAddBook = (req, res, next) => {
  res.render("addBook", { title: "Add Book" });
};

exports.postAddBook = (req, res, next) => {
  const { name, author, image, price } = req.body;

  const bookData = new AddBooks(name, author, image, price);
  console.log(bookData);
  bookData.save();
  res.render("success", { title: "Success Message" });
};
