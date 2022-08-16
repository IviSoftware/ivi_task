import React from "react";

function useLocalStorage(itemName,initialValue){
  const [todos,setTodos] = React.useState(initialValue);
  const [loading,setLoading]=React.useState(true);
  const [error,setError]=React.useState(false);

  React.useEffect(()=>{
    try {
      setTimeout(()=>{
        const todosLocalStorage = localStorage.getItem(itemName);
        let todosParsed;
      
        if(!todosLocalStorage){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          todosParsed=initialValue;
        }else{
          todosParsed = JSON.parse(todosLocalStorage);
        }
        setTodos(todosParsed);
        setLoading(false);
      },1000)
    } catch (error) {
      setError(true);
    }
  },[itemName, initialValue])
  

  const saveTodosLocal = (todosArray)=>{
   try {
    localStorage.setItem(itemName,JSON.stringify(todosArray));
    setTodos(todosArray)
   } catch (error) {
    setError(true);
   }
  }
  
  return{
    todos,
    saveTodosLocal,
    loading,
    error
  };
};

export {useLocalStorage};