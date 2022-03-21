const form = document.querySelector('form');
const displayBook = document.querySelector('.display-books');

const books = [];


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title');
    const author = formData.get('author');

    const book = {
        title,
        author
    }
  books.push(book);
  listBook();
 form.reset();
});

function listBook() {
    books.forEach((book) => {
    const div = document.createElement('div');
    const header = document.createElement('h3');
    header.textContent = book.title
    const title = document.createElement('p');
    title.textContent = book.author;
    div.appendChild(header);
    div.appendChild(title);
    displayBook.appendChild(div);
})
}









