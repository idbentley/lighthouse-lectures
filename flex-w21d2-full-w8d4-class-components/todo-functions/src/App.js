import axios from 'axios';
import { useState, useEffect } from 'react';


import TodoItem from './TodoItem';
import NewTaskForm from './NewTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/todos').then(results => {
      setTasks(results.data);
    });
  }, []);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function finishTask (id) {
    // //1. find the task
    // const updatedTask = tasks.filter(task => task.id === id)[0];
    // //2. modify the task
    // updatedTask.done = true;
    //3. update the task list
    // const otherTasks = tasks.filter(task => task.id !== id);
    // setTasks([...otherTasks, task]);

    setTasks(tasks.map(task => {
      // task => {id: uniqid(), task: 'buy milk', done: false},
      if(task.id !== id) {
        return task;
      } else {
        return {...task, priority: 10, done: true};
      }
    }));

  }

  function deleteTask (id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="App">
      <h1>Todo!</h1>
      <NewTaskForm addTask={addTask} />
      <ul>
        {tasks.map(task => <TodoItem key={task.id} {...task} finishTask={finishTask} deleteTask={deleteTask} >{task.task}</TodoItem>)}
      </ul>
      
    </div>
  );
}

export default App;
