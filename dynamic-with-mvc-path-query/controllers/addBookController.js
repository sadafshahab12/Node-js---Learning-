const AddNewBook = require("../model/addNewBook");

exports.getAddBook = (req, res, next) => {
  res.render("addBook", { title: "Add Book" });
};

exports.postAddBook = (req, res, next) => {
  const { name, author, image, price } = req.body;

  const bookData = new AddNewBook(name, author, image, price);
  bookData.saveBookInFile();
  res.render("success", { title: "Success Message" });
};
