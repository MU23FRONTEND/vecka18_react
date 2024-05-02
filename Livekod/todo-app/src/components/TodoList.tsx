import TodoItem from "./TodoItem";
import { MouseEvent } from 'react';

type Props = {
    todoList : Todo[],
    handleClick : (event : MouseEvent) => void
}

type Todo = {
    task : string,
    done : boolean
  }

function TodoList({ todoList, handleClick } : Props) {


  return (
    <ul className="todo-list">
        {
            todoList.length > 0
            ? 
            todoList.map((todo, index) => {
                return <TodoItem 
                           key={ index } 
                           task={ todo.task } 
                           done={ todo.done } 
                           handleClick={ handleClick }
                       />
            })
            :
            <li className="todo-item">Inga uppgifter hittades</li>
        }
        
        {/* <TodoItem task="Köpa hund" />    
        <TodoItem task="Rasta katten" />    
        <TodoItem task="Hämtar barnen" />    
        <TodoItem task="Städar poolen" />    
        <TodoItem task="Städa garaget" /> */}
    </ul>
    
  )
}

export default TodoList;
