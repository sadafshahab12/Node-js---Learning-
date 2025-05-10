const addedBooks = [];

module.exports = class AddBook {
  constructor(bookName, bookAuthor, bookPrice, bookImage) {
    this.name = bookName;
    this.author = bookAuthor;
    this.price = bookPrice;
    this.image = bookImage;
  }
  save() {
    addedBooks.push(this);
  }
  static fetchAll() {
    return addedBooks;
  }
};
