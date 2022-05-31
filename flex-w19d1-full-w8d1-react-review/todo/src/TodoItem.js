import trashIcon from './trash-icon.png';
import axios from 'axios';

export default function TodoItem({id, task, done, finishTask, deleteTask}) {

    function handleFinish(e) {
        // 1. update the backend
        axios.put(`http://localhost:3000/todos/${id}/finish`).then(
            () => {
                // 2. display the updated view to the user
                finishTask(id);
            });
    }

    function handleRemove(e) {
        //1. update the backend
        axios.delete(`http://localhost:3000/todos/${id}/delete`).then(
            () => {
                // 2. display to user
                deleteTask(id);
            }
        )
    }

    return (
        <li>
            <input type="checkbox" checked={done} onChange={handleFinish}/>
            {task}
            <a href="#" onClick={handleRemove} ><img src={trashIcon} alt="remove" /></a>
        </li>
    )
}