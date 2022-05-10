import './App.css';
import { useState } from 'react';
import NewBookForm from './NewBookForm.js';
import Book from './Book.js';
function App() {
  const [books, setBooks] = useState([{id: 0, title: "Narnia", author: 'CS Lewis'}]);

  function createNewBook(book) {
    setBooks([...books, book]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <NewBookForm createNewBook={createNewBook}/>
        <div>
          <h4>Books</h4>
          {books.map(book => <Book key={book.id} book={book}></Book> )}
        </div>
        
      </header>
    </div>
  );
}

export default App;
