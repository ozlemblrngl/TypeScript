import React, { useEffect, useRef, useState } from 'react'
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

const SingleToDo = ({ todo, todos, setToDos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editToDo, setEditToDO] = useState<string>(todo.toDo);

    const handleDone = (id: number) => {
        setToDos(todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };

    const handleDelete = (id: number) => {
        setToDos(todos.filter((todo) => todo.id !== id));
    };
    
    const handleEdit = (e:React.FormEvent, id:number)=>{
        e.preventDefault();

        setToDos(
            todos.map((todo)=>(
            todo.id === id ? {...todo, todo:editToDo}
                          :todo))
          );
        setEdit(false);
    };
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus()
    },[edit])

   
    return (
        <form className='todos__single' onSubmit={(e)=>handleEdit(e,todo.id)}>
            {
                edit ? (
                    <input 
                    ref={inputRef}
                    value= {editToDo} 
                    onChange={(e) => setEditToDO(e.target.value)} 
                    className='todos__single--test'/>
                ): (
                    todo.isDone ? (
                            <s className='todos__single--text'>{todo.toDo}</s>
                        ) : (
                            <span className='todos__single--text'>{todo.toDo}</span>
                        )
                ) }

            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}>
                    <BiSolidEditAlt />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}><MdDelete /></span>
                <span className="icon" onClick={() => handleDone(todo.id)}><MdDoneAll /></span>
            </div>
        </form>
    );
};

export default SingleToDo;
