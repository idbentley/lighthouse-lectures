import trashIcon from './trash-icon.png';

import axios from 'axios';

import {Component} from 'react';


// import React from 'react';
// export default class TodoItem extends React.Component {
// export default function TodoItem({id, task, done, finishTask, deleteTask}) {
export default class TodoItem extends Component {

    constructor() {
        super();
        // Don't alias props like this!
        // My mistake!
        // this.id = props.id;
        // this.task = props.task;
        // this.done = props.done;
        // this.finishTask = props.finishTask;
        // this.deleteTask = props.deleteTask;

        this.handleFinish = this.handleFinish.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }


    handleFinish(e) {
        // 1. update the backend
        axios.put(`http://localhost:3000/todos/${this.props.id}/finish`).then(
            () => {
                // 2. display the updated view to the user
                this.props.finishTask(this.props.id);
            });
    }

    handleRemove(e) {
        //1. update the backend
        axios.delete(`http://localhost:3000/todos/${this.props.id}/delete`).then(
            () => {
                // 2. display to user
                this.props.deleteTask(this.props.id);
            }
        )
    }

    render() {
        console.log('render?', this.props.id, this.props.task, this.props.done);
        return (
            <li>
                <input type="checkbox" checked={this.props.done} onChange={this.handleFinish}/>
                {this.props.task}
                <a href="#" onClick={this.handleRemove} ><img src={trashIcon} alt="remove" /></a>
            </li>
        )
    }
}