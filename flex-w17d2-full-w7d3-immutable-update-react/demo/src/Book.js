

export function Book({book, removeBook}) {
    return (
        <div>
            {book.title} - {book.author}
            <button onClick={() => removeBook(book.id)} >Remove</button>
        </div>
    )
}