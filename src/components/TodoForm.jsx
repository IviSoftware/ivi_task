import React from "react";
import { TodoContext } from "../hooks/TodoContext";
import '../styles/TodoForm.css';

function TodoForm(){

  const [taskText,setTaskText] = React.useState('');
  const {addTodo,setOpenModal} = React.useContext(TodoContext);

  const onSubmit =(event)=>{
    event.preventDefault();
    addTodo(taskText);
    setOpenModal(false);
  }

  const onChange=(event)=>{
    setTaskText(event.target.value);
  }

  return(
    <form onSubmit={onSubmit}>
      <label>Ingresa la tarea</label>
      <textarea
        placeholder="Tarea..."
        value={taskText}
        onChange={onChange}
      />
      <button
        type="submit"
      >
        agregar
      </button>
    </form>
  );
};

export {TodoForm};