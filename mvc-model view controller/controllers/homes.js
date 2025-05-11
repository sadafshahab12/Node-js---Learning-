const AddBook = require("../model/home");

exports.home = (req, res, next) => {
  AddBook.fetchAll((addedBooks) => {
    res.render("home", { addedBooks, title: "book website" });
  });
};
