import { AddBooks } from "../model/books.js";

export const addBookController = (req, res) => {
  AddBooks.fetchAll((addBook) => {
    res.render("addBook", { addBook, title: "Add Book" });
  });
};

export const addBookPostController = (req, res) => {
  try {
    const { title, author, description, price, image } = req.body;
    const bookData = new AddBooks(title, author, description, price, image); // creating instance of class
    console.log(bookData);
    bookData.save(); // You save the new book.

    // After saving, you fetch all books again and pass them to EJS
    AddBooks.fetchAll((addBook) => {
      res.render("addBook", { addBook: addBook, title: "Add Book" });
    });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).send("Internal Server Error");
  }
};
