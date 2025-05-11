const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path_utils");


module.exports = class AddBook {
  constructor(bookName, bookAuthor, bookPrice, bookImage) {
    this.name = bookName;
    this.author = bookAuthor;
    this.price = bookPrice;
    this.image = bookImage;
  }
  save() {
    addedBooks.push(this);
    const addBookPath = path.join(rootDir, "data", "books.json");
    fs.writeFileSync(addBookPath, JSON.stringify(addedBooks), (error) => {
      console.log(`File writing concluded: ${error}`);
    });
  }
  static fetchAll(callback) {
    const addBookPath = path.join(rootDir, "data", "books.json");
    fs.readFile(addBookPath, (error, data) => {
      console.log(`File Read: ${error} ${data}`);
      // if (error) {
      //   addedBooks = [];
      // } else {
      //   addedBooks = JSON.parse(data);
      // }
      if (!error) {
        addedBooks = JSON.parse(data);
      }
      callback(addedBooks);
    });
  }
};
