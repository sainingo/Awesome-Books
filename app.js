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
    displayBook.style.cssText = 'border: 3px solid black;';
  }
}

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

/* eslint-disable no-unused-vars */
const removeBook = (bookId) => {
  listBooks.removeBook(bookId);
  onPageReload();
};
/* eslint-disable no-unused-vars */
onPageReload();

document.querySelector('span').innerHTML = new Date();

const section = document.querySelectorAll('.section');
const addNew = document.querySelector('.list-books');

function makeActive(className) {
  section.forEach((item) => {
    if (item.classList.contains(className)) {
      item.classList.add('show');
      addNew.classList.toggle('show');
    } else {
      item.classList.remove('show');
    }
  });
}
