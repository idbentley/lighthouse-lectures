const express = require("express");
const morgan = require("morgan");


const app = express();

const books = require("./books.json");

function nextId() {
    const highestId = books[books.length-1].id;
    return highestId + 1;
}

app.listen(9876);

app.use(express.static('public'));
app.use(morgan('dev'));

app.get("/books", (req, res) => {
  res.json(books);
});

