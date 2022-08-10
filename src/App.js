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


  const [todos,setTodos] = React.useState(todoTask);
  const [searched,setSearched] = React.useState('');

  const completeTodos = todos.filter((todo)=>todo.completed==true).length;

  let
   todosSearch = [];
  if(searched.length < 1){
    todosSearch = todos;
  }else{
    let searchedClean = searched.toLowerCase();
    
    todosSearch = todos.filter((todo)=>{
      let todoText = todo.text.toLowerCase();
      return todoText.includes(searchedClean);
    });
  }

  return (
    <React.Fragment>
      <div className='App'>
        <TodoCounter
          todos={todos}
          completeTodos={completeTodos}
        />
        <TodoSearch
          setSearched={setSearched}
        />
        <TodoList>
          {todosSearch.map(todo=>(
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
