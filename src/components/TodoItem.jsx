import '../styles/TodoItem.css';
import '../styles/buttons.css'

function TodoItem(props){
  return(
    <li className="TodoItem">
        <p>{props.text}</p>
      <div className='buttons-container-item'>
        <span className='btn btn-ready'>✓</span>
        <span className='btn btn-delete'>x</span>
      </div>
    </li>
  );
};

export {TodoItem};