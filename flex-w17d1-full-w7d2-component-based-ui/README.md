# Component Based UI

## Resources

 - Code Repo: https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w17d1-full-w7d2-component-based-ui
 - Video Lecture: https://vimeo.com/710939882/20ba042527
 - Slides: In the Code Repo.

## Declarative UI

React is a declarative UI framework.  We tell the system what we want the UI to show, not how to achieve that.  When your data changes - react will internally determine how to change the UI to reflect the data.

Therefore: 
 - You don’t tell React when to render - React chooses for you
 - Data ownership is a key concept in understanding React

### The Virtual DOM

The Virtual DOM is an in-memory copy of the browser's real DOM.  It is used as a performance optimisation inside of React to optimize the render cycle.

## JSX - Tips and Tricks

### One Root

Components in JSX must have exactly one root element.

```jsx
// good!
 export default function Book({title, author}) {
   return (
        <div>
            <h5>{title} - {author}</h5>
            <span>Published in {releaseDate}</span>
        </div>
   )
}
```

```jsx
// bad 
 export default function Book({title, author}) {
   return (
       <h5>{title} - {author}</h5>
       <span>Published in {releaseDate}</span>
   )
}
```

Feel free to use a fragment, if your component shouldn't have an outer element.

```jsx
 export default function Book({title, author}) {
   return (
        <>
            <h5>{title} - {author}</h5>
            <span>Published in {releaseDate}</span>
        </>
   )
}

### Use `map` to convert arrays of data into arrays of components

```jsx
const books = [
   {id: 0, title: 'Frankenstein', author: 'Shelly, Mary'},
   {id: 1, title: 'Wizard Of Earthsea', author: 'Ursula K. LeGuin'},
   {id: 2, title: 'The Vegetarian', author: 'Han Kang'},
    …
]
```

With the above data in mind, we can use a `map` to convert the data into components.

```jsx
books.map(book => <Book key={book.id} book={book} />)
>> [
<Book key={0} book={{id: 0, title: 'Frankenstein', ...}} />,
<Book key={1} book={{id: 1, title: 'Wizard Of Earthsea', ...}} />,
<Book key={2} book={{id: 2, title: 'The Vegetarian', ...}} />
]
```

This is what it looks like inside a component:

```jsx
import Book from './Book';

export default function Bookshelf (props) {
   return (<div className="bookshelf">
       {props.books.map(book => <Book key={book.id} book={book} />)}
   </div>)
}
```

`key` values should be unique and should not change over time.

### Prop Spreading

Use the spread operator to put data directly on the props object.

If we don't use prop spreading:

```jsx
<Book book={book} />
```

will receive props like:

```jsx
props = {
   book: {
       id: 0,
       title: "Frankenstein",
       author: "Mary Shelly"
   }
}
```

If we do use prop spreading:

```jsx
<Book {...book} />
```

the props will not have the intermediary `book` attribute:

```jsx
props = {
   id: 0,
   title: "Frankenstein",
   author: "Mary Shelly"
}
```

### Destructure Props in the param list

Instead of:

```jsx
export default function Book(props) {
   return (
       <div>
           <h5>{props.title} - {props.author}</h5>
       </div>
   )
}
```

Directly destructure the props:

```jsx
export default function Book({title, author}) {
   return (
       <div>
           <h5>{title} - {author}</h5>
       </div>
   )
}
```
