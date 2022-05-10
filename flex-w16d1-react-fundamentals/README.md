# React Fundamentals

## Resources
 - Code Repo: https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w16d1-react-fundamentals
 - Video: https://vimeo.com/708365428/1cc8d0a478
 - Slides: In the code repo.

## What is React

React is a Component Oriented Frontend Framework.  React implements a data-binding system so that changes in the underlying data of your React application will result in automatically rendered changes to the frontend.

## React Components

Components are like _super HTML elements_: they are part of a heirarchy of Components, they can individually hold data as well as having behaviour.

## JSX

JSX is the templating language for React applications.  Unlike in an express application, each component is responsible for rendering itself, so it's good to think of JSX templates as more like template partials.

## Event Handlers

In React, event handlers are bound directly on HTML Elements and React components.

i.e.

```js
<form onSubmit={onSubmitHandler}>
    <input onChange={e => setTitle(e.target.value)} name="title">
</form>
```

## Props

Props are data that is owned by some parent component passed to your component through attributes with rendering the subcomponent:

```js
//Form.js
function Form(props) {
   return (<form>
       <TextInput name="username" />
       <PasswordInput name="password" />
   </form>);
}
```

```js
//TextInput.js
function TextInput(props) {
   return (<input name={props.name} />);
}
```

## State
State is data owned and managed by _this_ component.  In order to request a place to store data we use the `useState` hook, which gives us an accessor and a mutator function:

```js

export default function NewBookForm(props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
 
 return (<form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} 
            onChange={e => setTitle(e.target.value)}/>
        <p>{title}</p>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" value={author} 
            onChange={e => setAuthor(e.target.value)}/>
        <p>{author}</p>
        <button type="Submit">Submit</button>
    </form>);
}
```

## Controlled Component

In the previous example both the title input and the author input are controlled components, because their value is bound to the value of the underlying data - any changes to said data will cause the component to update, and any changes to the input will affect the said data.

## Create React App

Use this command to generate the simple starter React App.
```
$ npx create-react-app <your app name>
```