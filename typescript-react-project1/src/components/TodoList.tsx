import React from 'react';
import './styles.css';
import { ToDo } from '../model';
import SingleToDo from './SingleToDo';

interface Props{
    toDos: ToDo[];
    setToDos:React.Dispatch<React.SetStateAction<ToDo[]>>

}
const TodoList:React.FC <Props> = ({toDos, setToDos}) => {
  return (
    <div className='todos'>
        {toDos.map(todo => (
            <SingleToDo todo={todo} key={todo.id}
            todos={toDos}
            setToDos= {setToDos}/>
        ))}
    </div>
  )
}

export default TodoList