import React from 'react';
import {useLocalStorage} from './useLocalStorage.js';

const TodoContext = React.createContext();

function TodoProvider(props){

  const [searched,setSearched] = React.useState('');
  const {todos,saveTodosLocal,loading,error}= useLocalStorage('TODOS_V3',[]);
  const [openModal,setOpenModal] = React.useState(false);

  const completeTodos = todos.filter((todo)=>todo.completed==true).length;
  

  let todosSearch = [];
  
  if(searched.length < 1){
    todosSearch = todos;
  }else{
    let searchedClean = searched.toLowerCase();
    
    todosSearch = todos.filter((todo)=>{
      let todoText = todo.text.toLowerCase();
      return todoText.includes(searchedClean);
    });
  }

  let newTodos = [...todos];

  
  
  const readyTodos = (text)=>{
    let textCleared = text.toLowerCase();
    let todoIndex = newTodos.findIndex(todo => todo.text.toLowerCase() == textCleared);
    newTodos[todoIndex].completed = true;
    saveTodosLocal(newTodos)
  }

  const deleteTodos = (text)=>{
    let textCleared = text.toLowerCase();
    let todoIndex = newTodos.findIndex(todo => todo.text.toLowerCase() == textCleared);
    newTodos.splice(todoIndex,1)
    saveTodosLocal(newTodos)
  }


  const totalTodos = todos.length;

  

    return(
      <TodoContext.Provider
      value={{
        totalTodos,
        todos,
        completeTodos,
        setSearched,
        todosSearch,
        readyTodos,
        deleteTodos,
        loading,
        error,
        openModal,
        setOpenModal,
      }}>
        {props.children}
      </TodoContext.Provider>
    );
}


export {TodoContext,TodoProvider};