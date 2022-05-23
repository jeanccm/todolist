import React, {useState, useEffect, useRef} from 'react';

function Todoform(props) {
    const[input, setinput]=useState('');
    const inputRef =useRef(null)
    useEffect(() =>{
        inputRef.current.focus()
    })
    const handlechange= i =>{
        setinput(i.target.value);
    }
    const handlesubmit= e =>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            Text:input
        });

        setinput('')
    };
  return (
   <form className='todo-form' onSubmit={handlesubmit}>
       <input
        type="text" 
        placeholder="Añadir tarea" 
        value={input} name="text"
       className="todo-input"
       onChange={handlechange}
       ref={inputRef}
       >

       </input>
       <button className="todo-button">Añadir</button>
   </form>
  );
}

export default Todoform;
