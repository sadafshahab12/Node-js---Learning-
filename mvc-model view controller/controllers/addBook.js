const AddBook = require("../model/home");

exports.getAddBooks = (req, res, next) => {
  console.log("Handling /add-book for get method: ", req.url, req.method);
  res.render("addBook", { title: "Add Book" });
};

exports.postAddBook = (req, res, next) => {
  console.log("Book Added Successfully: ", req.body);
  // -------------------------------model ----------------------------------
  const { name, author, price, image } = req.body;
  const bookData = new AddBook(name, author, price, image); // creating instance of class
  console.log(bookData)
  bookData.save();
  //bohot sari chezen hmn push krni hogi to hum isy object men rakhty hn as key value pair
  res.render("submitForm", { title: "greet" });
};


