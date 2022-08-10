import '../styles/TodoSearch.css';

const viewSearched = (setSearched,event)=>{
  setSearched(event.target.value)
}


function TodoSearch({setSearched}){
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