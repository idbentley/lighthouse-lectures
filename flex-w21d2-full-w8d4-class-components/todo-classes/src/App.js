import axios from 'axios';
import { Component } from 'react';


import TodoItem from './TodoItem';
import NewTaskForm from './NewTaskForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tasks: []
    }
    this.addTask = this.addTask.bind(this);
    this.finishTask = this.finishTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:3000/todos').then(results => {
      this.setState({tasks: results.data});
    });
  }
  addTask(task) {
    // this.setState({...this.state, tasks: [...this.state.tasks, task]});
    this.setState({tasks: [...this.state.tasks, task]});
  }

  finishTask (id) {
    
    this.setState({tasks: this.state.tasks.map(task => {
      // task => {id: uniqid(), task: 'buy milk', done: false},
      if(task.id !== id) {
        return task;
      } else {
        return {...task, done: true};
      }
    })});

  }

  deleteTask (id) {
    this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
  }

  render() {
    return (
      <div className="App">
        <h1>Todo!</h1>
        <NewTaskForm addTask={this.addTask} />
        <ul>
          {this.state.tasks.map(task => <TodoItem key={task.id} {...task} finishTask={this.finishTask} deleteTask={this.deleteTask} >{task.task}</TodoItem>)}
        </ul>
        
      </div>
    );
  }
}

export default App;
