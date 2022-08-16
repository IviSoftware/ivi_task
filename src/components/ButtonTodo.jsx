import '../styles/buttons.css';
import React from 'react';
import { TodoContext } from '../hooks/TodoContext';

function ButtonTodo(){

  const {openModal,setOpenModal} = React.useContext(TodoContext);

  const onModal = ()=>{
    if(openModal){
      setOpenModal(false);
    }else{
      setOpenModal(true);
    }
  }

  return(
    <button 
      className="btn btn-add-todo"
      onClick={onModal}
    >+
    </button>
  );
};

export {ButtonTodo}