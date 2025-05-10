const { addedBooks } = require("./addBook");

exports.home = (req, res, next) => {
  console.log("handling / for get: ", req.url, req.method);
  res.render("home", { addedBooks, title: "book website" }); // render is attached with ejs
};
