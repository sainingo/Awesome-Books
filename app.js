const displayBook = document.querySelector('.display-books');
const form = document.querySelector('form');

class Books {
  constructor() {
    if (localStorage.getItem('books') === null) {
      this.books = [];
    } else {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

  // add book methods
  addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  // remove book methods
  removeBook(bookId) {
    this.books = this.books.filter((item, index) => {
      if (index !== bookId) {
        return item;
      }
      return undefined;
    });
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

// create an object
const listBooks = new Books();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get('title');
  const author = formData.get('author');
  const bookObj = {
    title,
    author,
  };
  listBooks.addBook(bookObj);
  onPageReload();
  form.reset();
});

function onPageReload() {
  displayBook.innerHTML = listBooks.books.map((book, index) => `
  <div class="display">
    <p>"${book.title}" by ${book.author}</p>
    <button class="remove-btn" onclick="removeBook(${index})">Remove</button>
    </div>
  `).join('');

  if (listBooks.books.length === 0) {
    displayBook.style.cssText = 'border: none;';
  } else {
    displayBook.style.cssText = 'border: 2px solid black;';
  }
}

const removeBook = (bookId) => {
  listBooks.removeBook(bookId);
  onPageReload();
};

onPageReload();
