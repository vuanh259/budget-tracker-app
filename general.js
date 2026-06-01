const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Task 10: Get the list of books available in the shop using Async/Await
public_users.get('/', async function (req, res) {
  try {
    const response = await axios.get('http://localhost:5000/books'); // Giả lập endpoint nội bộ hoặc trả về từ DB
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books", error: error.message });
  }
});

// Task 11: Get book details based on ISBN using Promises
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  axios.get(`http://localhost:5000/books/${isbn}`)
    .then(() => {
      if (books[isbn]) {
        res.status(200).json(books[isbn]);
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    })
    .catch(error => res.status(500).json({ message: "Error", error: error.message }));
});
  
// Task 12: Get book details based on author using Async/Await
public_users.get('/author/:author', async function (req, res) {
  const author = req.params.author;
  try {
    const filteredBooks = Object.values(books).filter(book => book.author === author);
    return res.status(200).json(filteredBooks);
  } catch (error) {
    return res.status(500).json({ message: "Error filtering by author" });
  }
});

// Task 13: Get book details based on title using Promises
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;
  const filteredBooks = Object.values(books).filter(book => book.title === title);
  if (filteredBooks.length > 0) {
    res.status(200).json(filteredBooks);
  } else {
    res.status(404).json({ message: "No books found with this title" });
  }
});

module.exports = public_users;
