import React,{UseState} from 'react'
import Todoform from './Todoform';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function todo({todo, completeTodos, removeTodo, updateTodo}) {
    const [edit, setEdit] =UseState({
        id:null,
        value:''
    });
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            vaalue:''
        })
    }

    if (edit.id) {
        return <Todoform edit={edit} onsubmit={submitUpdate} />;
    }


  return todo.map((todo, index) =>(
      <div className={todo.iscomplete ? 'todo-row complete' : 'todo-row'}
       key={index}>
       <div key={todo.id} onclick={() => completeTodos(todo.id)}>
           {todo.text}
       </div>
       <div className="icons">
           <RiCloseCircleLine
           oneclick={() =>removeTodo(todo.id)}
           className='deletei-con'
           />
           <TiEdit oneclick={() =>setEdit({id:todo.id, value: todo.text})}
           className='edit-icon'/>

       </div>
      </div>
  ))
}

export default todo;


