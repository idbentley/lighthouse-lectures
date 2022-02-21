const express = require("express");
const morgan = require("morgan");

const app = express();

const books = require("./books.json");
console.log(books);
// middleware

app.set('view engine', 'pug');

app.use(morgan('dev'));
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next()

// })

app.get("/", (req, res) => {
  res.write('welcome to home page');
  res.send();
});

app.get('/book/:book_id', (req, res) => {
  const bookId = req.params.book_id;
  const book = books[bookId]
  res.json(book)
})

app.listen(9876);