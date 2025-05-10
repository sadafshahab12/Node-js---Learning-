const AddBook = require("../model/home");

exports.home = (req, res, next) => {
  console.log("handling / for get: ", req.url, req.method);
  const addedBooks = AddBook.fetchAll();
  console.log(addedBooks);
  res.render("home", { addedBooks, title: "book website" }); // render is attached with ejs
};
