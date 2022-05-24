import { useState } from 'react';
import { NewClassForm } from './NewClassForm';
import { Class } from './Class';
import { DoubleCounter } from './DoubleCounter';

function App() {
  const [classes, setClasses] = useState([]);
  const [id, setId] = useState(1);

  function getId() {
    setId(prevId => prevId + 1);
    return id;
  }

  function addNewClass(cls) {
    setClasses([...classes, cls]);
  }

  function removeClass(classId) {
    setClasses(classes.filter(cls => cls.id !== classId));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React University</h1>
      </header>
      <DoubleCounter />
      {classes.map(cls => <Class key={cls.id} {...cls} removeClass={removeClass} />)}
      <hr />
      <NewClassForm addNewClass={addNewClass} getId={getId} />
    </div>
  );
}

export default App;
