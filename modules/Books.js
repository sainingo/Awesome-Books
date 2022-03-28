class Books {
  constructor() {
    if (localStorage.getItem("books") === null) {
      this.books = [];
    } else {
      this.books = JSON.parse(localStorage.getItem("books"));
    }
  }

  // add book methods
  addBook(book) {
    this.books.push(book);
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  // remove book methods
  removeBook(bookId) {
    this.books = this.books.filter((item, index) => {
      if (index !== bookId) {
        return item;
      }
      return undefined;
    });
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}

export default Books;
