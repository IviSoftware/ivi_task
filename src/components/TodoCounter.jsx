function TodoCounter({todos,completeTodos}){
    return(
      <p>Has completado {completeTodos} de {todos.length} Tareas</p>       
    );
};

export {TodoCounter}