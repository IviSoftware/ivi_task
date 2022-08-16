import React from "react";
import { TodoContext } from "../hooks/TodoContext";

function TodoCounter(){
  const {totalTodos,completeTodos} = React.useContext(TodoContext);

    return(
      <p>Has completado {completeTodos} de {totalTodos} Tareas</p>       
    );
};

export {TodoCounter}