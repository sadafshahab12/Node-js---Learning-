const AddNewBook = require("../model/addNewBook");


exports.bookController = (req, res, next) => {
  AddNewBook.fetchAllDataFromFile((addNewBook) => {
    res.render("books", { addNewBook, title: "Books" });
  });
};
