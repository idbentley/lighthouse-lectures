const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const books = require("./books.json");

function nextId() {
    const highestId = books[books.length-1].id;
    return highestId + 1;
}

app.listen(9876);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(morgan('dev'));

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:book_id", (req, res) => {
  const bookId = req.params.book_id;
  const book = books[bookId]
  res.json(book)
});

app.post("/books", (req, res) => {
   console.log('body', req.body);
    const book = {
        id: nextId(),
        title: req.body.title,
        author: req.body.author,
        year_written: req.body.year_written,
        price: req.body.price
    }
    books.push(book);
    res.json(book).status(201).end();
});

