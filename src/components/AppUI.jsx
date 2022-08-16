import React from 'react';
import { TodoCounter } from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {ButtonTodo} from './ButtonTodo';
import {TodoContext} from '../hooks/TodoContext.js';
import {Modal} from './Modal';
import {TodoForm} from './TodoForm';


function AppUI(){

  const {
    error,
    loading,
    todos,
    todosSearch,
    readyTodos,
    deleteTodos,
    openModal,
  } = React.useContext(TodoContext);

  return(
    <React.Fragment>
      <div className='App'>
        <TodoCounter
        />
        <TodoSearch
        />
       
        <TodoList>
          {error && <p>Ha ocurrido un error...</p> }
          {loading && <p>Estamos cargando...</p> }
          {(!loading && todos.length<1) && <p>Crea tu primer todo</p>}  
    
          {todosSearch.map(todo=>(
            <TodoItem
              text={todo.text}
              key={todo.text}
              completed={todo.completed}
              readyTodos={readyTodos}
              deleteTodos={deleteTodos}
            />
          ))}
        </TodoList>
        
       {openModal && (
         <Modal>
           <TodoForm/>
        </Modal>
       )}

        <ButtonTodo/>

      </div>
  </React.Fragment>
  );
};

export {AppUI};