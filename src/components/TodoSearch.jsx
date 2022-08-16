import '../styles/TodoSearch.css';
import React from 'react';
import { TodoContext } from '../hooks/TodoContext';

const viewSearched = (setSearched,event)=>{
  setSearched(event.target.value)
}

function TodoSearch(){

  const {setSearched} = React.useContext(TodoContext);

  return(
    <input 
      className='todoSearch' 
      type='text' 
      placeholder='buscar...'
      onChange={(event)=>viewSearched(setSearched,event)}  
    />
  );
};

export {TodoSearch}