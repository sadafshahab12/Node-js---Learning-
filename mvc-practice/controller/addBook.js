import { AddBooks } from "../model/books.js";

export const addBookController = (req, res) => {
  AddBooks.fetchAll((addBook)=>{
  res.render("addBook", { addBook ,title: "Add Book" });
  })

};

export const addBookPostController = (req, res) => {
  const { title, author, description, price, image } = req.body;
  const bookData = new AddBooks(title, author, description, price, image); // creating instance of class
  console.log(bookData);
  bookData.save();
  res.render("addBook", { title: "Add Book" });
};
