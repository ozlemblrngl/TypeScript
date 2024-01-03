import React, { useState } from 'react'
import { ToDo } from '../model'
import {BiSolidEditAlt } from 'react-icons/bi'
import {MdDoneAll} from 'react-icons/md'
import {MdDelete } from 'react-icons/md'
import './styles.css'

type Props= {
    todo: ToDo;
    todos:ToDo[];
    setToDos:React.Dispatch<React.SetStateAction<ToDo[]>>
}

const SingleToDo= ({todo, todos, setToDos}:Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editToDo, setEditToDO] = useState<string>("")
    
    const handleDone = (id: number) => {
        setToDos(todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };
    
    const handleDelete = (id:number) =>{
        setToDos(todos.filter((todo) => todo.id !== id))

    }

    }
  return (
    <form className='todos__single'>
        {
            todo.isDone ? (
                <s className='todos__single--text'>{todo.toDo}</s>
            ): (
                <span className='todos__single--text'>{todo.toDo}</span>
            )
        }
       
            <div>
               <span className="icon"><BiSolidEditAlt /></span>
               <span className="icon" onClick={()=>handleDelete(todo.id)}><MdDelete /></span>
               <span className="icon" onClick={()=>handleDone(todo.id)}><MdDoneAll/></span>
            </div>
    </form>
  )
}

export default SingleToDo