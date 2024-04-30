import TodoItem from "./TodoItem";
import todos from '../assets/todoList.json';
import { MouseEvent } from 'react';

type Todo = {
    task : string,
    done : boolean
}

function TodoList() {
    const todoList : Todo[] = [...todos];
    console.log(todoList);

    const handleClick = (event : MouseEvent) : void => {
        const index : number = todoList.findIndex(todo => todo.task === (event.target as HTMLElement).textContent);
        todoList[index].done = !todoList[index].done;
        console.log(todoList);
    }

    //Detta funkar lika bra!
    // function handleClick() {
        
    // }

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
        <TodoItem task="Städa garaget" />     */}
    </ul>
  )
}

export default TodoList;
