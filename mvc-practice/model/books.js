import path from "path";
import { rootDir } from "../utils/path_utils.js";
import fs from "fs";
export class AddBooks {
  constructor(bookTitle, bookAuthor, bookDescription, bookPrice, bookImage) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.description = bookDescription;
    this.price = bookPrice;
    this.image = bookImage;
  }

  save() {
    AddBooks.fetchAll((addBook) => {
      addBook.push(this);
      const addBookPath = path.join(rootDir, "data", "books.json");
      fs.writeFile(addBookPath, JSON.stringify(addBook), (error) => {
        console.log(`File writing concluded: ${error}`);
      });
    });
  }

  static fetchAll(callback) {
    const addBookPath = path.join(rootDir, "data", "books.json");
    fs.readFile(addBookPath, (error, data) => {
        console.log(`File Read: ${error} ${data}`);
      if (!error) {
        callback(JSON.parse(data));
      } else {
        console.log("Error reading file", error);
        callback([]);
      }
    });
  }
} 
