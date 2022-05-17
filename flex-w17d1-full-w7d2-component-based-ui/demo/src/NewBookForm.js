import { useState } from 'react';
import './NewBookForm.css';

function NewBookForm({createNewBook}) {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [author, setAuthor] = useState("");

    function validateTitle() {
        if (title && title.length > 0) {
            return true;
        } else {
            setTitleError("This title is invalid");
            return false;
        }
    }

    function onSubmit (event) {
        event.preventDefault();
        if (validateTitle()) {
            const book = {
                id: Math.floor(Math.random(100)),
                title: title,
                author: author
            }
            createNewBook(book);
        }
    }

    return (<form onSubmit={onSubmit}>
        <label htmlFor="title">Title: </label>
        <input data-testid="title" type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} /><br />
        {titleError && <span className="error">Please Enter a Title</span>}<br />
        <label htmlFor="author">Author: </label>
        <input data-testid="author" type="text" name="author" value={author} onChange={e => setAuthor(e.target.value)} />
        <br />
        <button type="Submit">Submit</button>
    </form>);
}
export default NewBookForm;