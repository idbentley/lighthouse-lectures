import { useState } from 'react';
import { NewBookForm } from './NewBookForm';
import { Book } from './Book';

function App() {
  const [books, setBooks] = useState([]);
  const [id, setId] = useState(1);

  function getId() {
    setId(prevId => prevId + 1);
    return id;
  }

  function addNewBook(book) {
    console.log(book);
    setBooks([...books, book]);
  }

  function removeBook(bookId) {
    setBooks(books.filter(book => book.id !== bookId));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Book Library</h1>
      </header>
      {books.map(book => <Book key={book.id} book={book} removeBook={removeBook} />)}
      <hr />
      <NewBookForm addNewBook={addNewBook} getId={getId} />
    </div>
  );
}

export default App;
