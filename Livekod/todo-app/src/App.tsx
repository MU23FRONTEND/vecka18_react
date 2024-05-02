import AddForm from "./components/AddForm"
import Counter from "./components/Counter"
import TodoList from "./components/TodoList"
import { MouseEvent, FormEvent, useState } from 'react';
import todos from './assets/todoList.json';

type Todo = {
  task : string,
  done : boolean
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([...todos]);
  const [input, setInput] = useState<string>('');

  const handleInput = (event : FormEvent) : void => {
    setInput((event.target as HTMLInputElement).value);
    console.log(typeof input);
  }

  const handleNewTodo = (event : FormEvent) : void => {
    event.preventDefault();
    const newTodo : Todo = {
      task : input,
      done : false
    }
    setTodoList(prevTodoList => [...prevTodoList, newTodo]);
  }

  const handleClick = (event : MouseEvent) : void => {
      const index : number = todoList.findIndex(todo => todo.task === (event.target as HTMLElement).textContent);
      const newTodoList : Todo[] = [...todoList];
      newTodoList[index].done = !newTodoList[index].done;
      setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>Todo App</h1>
      <AddForm handleNewTodo={ handleNewTodo } handleInput={ handleInput } />
      <TodoList todoList={ todoList } handleClick={ handleClick} />
      <Counter />
    </div>
  )
}

export default App
