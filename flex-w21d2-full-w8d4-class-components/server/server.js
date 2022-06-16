// Server API
const PORT = 8080;
const express = require('express');   
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(express.json())

const nextId = (function () { 
    let id = 1;
    function nextId() {
        return `${id++}`;
    }
    return nextId;
})();

let data = [
    {id: nextId(), task: 'buy milk', done: false},
    {id: nextId(), task: 'wash dishes', done: false},
    {id: nextId(), task: 'clean up', done: true },
];


app.get("/todos", (req, res) => {
    res.json(data);
})

app.delete("/todos/:id/delete", (req, res) => {
    data = data.filter(datum => datum.id != req.params.id);
    res.status(204).json({})
})

app.post("/todos", (req, res) => {
    const todo = req.body.todo;
    todo.id = nextId();
    todo.done = false;
    data.push(todo);
    res.json(todo);
})

app.put("/todos/:id/finish", (req, res) => {
    data = data.map(todo => {
        if (todo.id === req.params.id) {
            return {...todo, done: true};
        } else {
            return todo;
        }
    });
    res.status(204).json({})
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
