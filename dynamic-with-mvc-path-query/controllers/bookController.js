const { AddBooks } = require("../../mvc-practice/model/books");

exports.bookController = (req, res, next) => {
  AddBooks.fetchAll((addNewBook) => {
    res.render("books", { addNewBook, title: "Books" });
  });
};
