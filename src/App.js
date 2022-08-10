import './App.css';
import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {ButtonTodo} from './components/ButtonTodo';

const todoTask = [
  {text:'Cortar Cebolla',completed:false},
  {text:'Cortar Jitomate',completed:false},
  {text:'curso de javascript',completed:true},
  
];

function App() {


  const [todos,setTodos] = React.useState(todoTask)
  const completeTodos = todos.filter((todo)=>todo.completed==true).length

  return (
    <React.Fragment>
      <div className='App'>
        <TodoCounter
          todos={todos}
          completeTodos={completeTodos}
        />
        <TodoSearch
        />
        <TodoList>
          {todoTask.map(todo=>(
            <TodoItem
              text={todo.text}
              key={todo.text}
            />
          ))}
        </TodoList>
        <ButtonTodo/>
      </div>
    </React.Fragment>
  );
}

export default App;
