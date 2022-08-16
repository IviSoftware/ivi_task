import '../styles/TodoItem.css';
import '../styles/buttons.css'

function TodoItem(props){
  return(
    <li className="TodoItem">
        <p
          className={`${props.completed == true ? 'todoComplete' : 'todoIncomplete'}`}
        >{props.text}
        </p>
      <div className='buttons-container-item'>
        <span 
          className='btn btn-ready'
          onClick={()=>props.readyTodos(props.text)} 
        >✓</span>
        <span 
          className='btn btn-delete'
          onClick={()=>props.deleteTodos(props.text)}
        >x</span>
      </div>
    </li>
  );
};

export {TodoItem};