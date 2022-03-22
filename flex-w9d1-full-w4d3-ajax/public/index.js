// $(document).ready(() => {

// })

$(() => {

    const fetchBooks = () => {
      $.ajax({
        url: '/books',
        method: 'GET',
        dataType: 'json',
        success: (books) => {
          console.log("data", books);
          createBookShelfComponent(books);
        },
        error: (err) => {
          console.log(`error: ${err}`)
        } 
      });
    };
  
    fetchBooks();
  
  
    const createBookComponent = (book) => {
      const $title = $('<h2>').text(book.title);
      const $author = $('<p>').text(book.author);
      const $yearWritten = $('<span>').text(`${book.year_written} | `);
      const $price = $('<span>').text(`$ ${book.price}`);

      const $book = $('<div>').addClass('book');
    
      $book.append($title, $author, $yearWritten, $price);
      return $book;
    };
  
    const createBookShelfComponent = (books) => {
      const $bookshelf = $('.bookshelf');
      $bookshelf.empty();
      for(const book of books) {
        const $book = createBookComponent(book);
        $bookshelf.prepend($book);
      }
    }
  
    const $form = $('#new-book-form');
  
    $form.on('submit', function(event){
      event.preventDefault();
      console.log('The form was submitted!')
      const serializedData = $(event.target).serialize();
    
      $.post('/books', serializedData, response => {
        console.log(response)
        fetchBooks();
      })
  
    })
  
  
  
  });