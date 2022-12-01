import { useState } from 'react';
function NewBookForm({createNewBook}) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    function changeAuthor(event) {
        console.log('val', event.target.value);
        setAuthor(event.target.value);
    }

    function onSubmit (event) {
        event.preventDefault();
        const book = {
            id: Math.floor(Math.random()*100),
            title: title,
            author: author
        }
        createNewBook(book);
    }

    return (<form onSubmit={onSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <br />
        <label htmlFor="author">Author: </label>
        <input type="text" name="author" value={author} onChange={changeAuthor} />
        <br />
        <button type="Submit">Submit</button>
    </form>);
}
export default NewBookForm;