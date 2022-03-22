const form = document.querySelector('form');
const displayBook = document.querySelector('.display-books');
const addBookButton = document.querySelector('.add-book');

const books = [];
let storedBooks;

if (localStorage.getItem('books') === null) {
  storedBooks = localStorage.setItem('books', JSON.stringify(books));
} else {
  storedBooks = JSON.parse(localStorage.getItem('books'));
}

const showBooks = () => {
  storedBooks = JSON.parse(localStorage.getItem('books'));
  storedBooks.forEach((book) => {
    const div = document.createElement('div');
    const header = document.createElement('h3');
    header.textContent += book.title;
    const authorName = document.createElement('p');
    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.className = 'remove';
    div.appendChild(header);
    div.appendChild(authorName);
    div.appendChild(button);
    displayBook.appendChild(div);
  });
};

const addBook = (event) => {
  storedBooks = JSON.parse(localStorage.getItem('books'));
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get('title');
  const author = formData.get('author');
  const book = {
    title,
    author,
  };

  book.id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  storedBooks.push(book);
  localStorage.setItem('books', JSON.stringify(storedBooks));
  form.reset();

  const div = document.createElement('div');
  div.classList.add('books');
  div.dataset.id = book.id;
  const header = document.createElement('h3');
  header.textContent += book.title;
  const authorName = document.createElement('p');
  authorName.textContent += book.author;
  const button = document.createElement('button');
  button.textContent = 'Remove';
  button.className = 'remove';
  div.appendChild(header);
  div.appendChild(authorName);
  div.appendChild(button);
  displayBook.appendChild(div);
};

const removeBook = (el) => {
  if (el.classList.contains('remove')) {
    el.parentElement.remove();
  }
};

document.addEventListener('DOMContentLoaded', showBooks);
addBookButton.addEventListener('click', addBook);

displayBook.addEventListener('click', (e) => {
  removeBook(e.target);
  const newBooks = JSON.parse(localStorage.getItem('books'));
  newBooks.forEach((book, index) => {
    if (book.author === e.target.previousElementSibling.textContent) {
      newBooks.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(newBooks));
});
