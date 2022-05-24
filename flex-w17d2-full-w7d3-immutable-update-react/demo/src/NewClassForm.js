import { useState } from 'react';
export function NewClassForm(props) {
    const [name, setName] = useState("");
    const [shortName, setShortName] = useState('');

    function resetForm() {
        setName("");
        setShortName("");
    }

    function submitForm(e) {
        e.preventDefault();
        const cls = {
            id: props.getId(),
            shortName,
            name
        }
        props.addNewClass(cls);

    }

    return (
        <>
            <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name} />
            <br />
            <label htmlFor="shortName">Short Name</label>
            <input type="text" id="shortName" name="shortName" onChange={e => setShortName(e.target.value)} value={shortName} />
            <br />
            <button type="submit">Add New Class</button>
            <input type="button" onClick={resetForm} value="Reset" />
            </form>
        </>
    );
}