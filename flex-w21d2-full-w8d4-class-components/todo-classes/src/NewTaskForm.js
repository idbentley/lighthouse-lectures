import axios from 'axios';
import React from 'react';


// export default function NewTaskForm(props) {
// const [task, setTask] = useState('');
export default class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/todos', {todo: {task: this.state.task}}).then(
            (res) => {
                this.props.addTask(res.data);
                // setTask('');
                this.setState({task: ''});
            }
        );
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">Task: </label>
                <input type="text" name="task" id="task" value={this.state.task} onChange={e => this.setState({task: e.target.value})} />
                <button>Submit</button>
            </form>
        )
    }
}

