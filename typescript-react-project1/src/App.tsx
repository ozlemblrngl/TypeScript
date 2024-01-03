import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { ToDo } from './model';
import TodoList from './components/TodoList';

const App: React.FC= () => {
  const [toDo, setToDo] = useState<string>("")
  const [toDos,setToDos] = useState<ToDo[]>([])


  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if(toDo){
      setToDos([...toDos, {id: Date.now(), toDo, isDone:false}]);
      setToDo("");
    }
  }

  console.log(toDos)

  return (
    <div className="App">
      <span className='heading'><strong>Taskify</strong></span>
     <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
     <TodoList toDos={toDos} setToDos={setToDos}/>
    </div>
  );
}

export default App;
