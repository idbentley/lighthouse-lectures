// Server API
const PORT = 8080;
const express = require('express');   
const uniqid = require('uniqid');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(express.json())

let data = [
    {id: uniqid(), task: 'buy milk', done: false},
    {id: uniqid(), task: 'wash dishes', done: false},
    {id: uniqid(), task: 'clean up', done: true },
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
    todo.id = uniqid();
    todo.done = false;
    data.push(todo);
    res.json(todo);
})

app.put("/todos/:id/finish", (req, res) => {
    const todo = data.filter(datum => datum.id === req.params.id)[0];
    if (todo) {
        todo.done = true;
        data = [...data.filter(datum => datum.id !== req.params.id), todo];
    }
    res.status(204).json({})
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
