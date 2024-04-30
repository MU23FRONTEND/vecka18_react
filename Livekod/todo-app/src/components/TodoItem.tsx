import { MouseEvent } from 'react';

type Props = {
    task : string,
    done : boolean,
    handleClick : (event : MouseEvent) => void
}

function TodoItem({ task, done, handleClick } : Props) {
  return (
    <li onClick={ handleClick } className={ done ? "todo-item todo-item--done" : "todo-item" }>{ task }</li>
  )
}

export default TodoItem;
