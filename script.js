// Sample book data
const books = [];

const bookList = document.getElementById('book-list');
const addBookForm = document.getElementById('add-book-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

addBookForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Check for duplicates
  const duplicate = books.find((book) => book.isbn === isbn);

  if (!duplicate) {
    books.push({ title, author, isbn });
    displayBookList();
    addBookForm.reset();
  } else {
    alert('This book already exists in the library.');
  }
});

searchInput.addEventListener('input', function () {
  const searchValue = searchInput.value.toLowerCase();
  const results = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchValue) ||
      book.author.toLowerCase().includes(searchValue)
  );

  displaySearchResults(results);
});

function displayBookList() {
  bookList.innerHTML = '';
  books.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`;
    bookList.appendChild(li);
  });
}

function displaySearchResults(results) {
  searchResults.innerHTML = '';
  results.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`;
    searchResults.appendChild(li);
  });
}
v