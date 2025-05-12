const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path_utils");

module.exports = class AddBook {  // created a separate model file for books
  constructor(bookName, bookAuthor, bookPrice, bookImage) {
    this.name = bookName;
    this.author = bookAuthor;
    this.price = bookPrice;
    this.image = bookImage;
  }
  save() {
    AddBook.fetchAll((addedBooks) => {
      //before adding a new book, we need to fetch all the books
      // first fetch all data before saving books
      addedBooks.push(this); // add new book
      const addBookPath = path.join(rootDir, "data", "books.json"); // and then write it to the file
      fs.writeFile(addBookPath, JSON.stringify(addedBooks), (error) => {
        // create a file and write data to it
        console.log(`File writing concluded: ${error}`);
      });
    });
  }
  static fetchAll(callback) {
    //retrieving data from file
    const addBookPath = path.join(rootDir, "data", "books.json"); // define path from where to read the file
    fs.readFile(addBookPath, (error, data) => {
      // reading file and this is async so we are handling it with callback that pass in the fetchAll method
      console.log(`File Read: ${error} ${data}`);
      if (!error) {
        callback(JSON.parse(data)); //ya data parse krdo ya agar data empty h to rmpty array show krdo
      } else {
        callback([]);
      }
    });
  }
};
