import axios from 'axios';
import { useState } from 'react';

export default function NewTaskForm(props) {
    const [task, setTask] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/todos', {todo: {task: task}}).then(
            (res) => {
                props.addTask(res.data);
                setTask('');
            }
        );
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task: </label>
            <input type="text" name="task" id="task" value={task} onChange={e => setTask(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}

