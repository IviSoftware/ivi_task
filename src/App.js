import './App.css';
import React from 'react';
import { AppUI } from './components/AppUI';
import{TodoProvider} from './hooks/TodoContext.js'




function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
