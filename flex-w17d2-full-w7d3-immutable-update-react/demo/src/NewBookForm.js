import { useState } from 'react';
export function NewBookForm(props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    function resetForm() {
        setTitle("");
        setAuthor("");
    }

    function titleChange(e) {
        setTitle(e.target.value);
    }

    function authorChange(e) {
        setAuthor(e.target.value);
    }

    function submitForm(e) {
        e.preventDefault();
        const book = {
            id: props.getId(),
            title: title,
            author: author
        }
        props.addNewBook(book);

    }

    return (
        <>
            <div>{title}</div>
            <form onSubmit={submitForm}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" onChange={titleChange} value={title} />
            <br />
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" onChange={authorChange} value={author} />
            <br />
            <button type="submit">Add New Book</button>
            <input type="button" onClick={resetForm} value="Reset" />
            </form>
        </>
    );
}