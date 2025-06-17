const AddNewBook = require("../model/addNewBook");


exports.bookController = (req, res, next) => {
  AddNewBook.fetchAllDataFromFile((addNewBook) => {
    res.render("store/books", { addNewBook, title: "Books" });
  });
};
