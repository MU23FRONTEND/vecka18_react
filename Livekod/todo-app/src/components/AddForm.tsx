import { FormEvent } from 'react';

type Props = {
    handleNewTodo: (event : FormEvent) => void,
    handleInput: (event : FormEvent) => void,
}

function AddForm({handleNewTodo, handleInput} : Props) {
  return (
    <form onSubmit={ handleNewTodo } className="add-form">
        <input onChange={ handleInput } type="text" />
        <input type="submit" value="Add todo!" />
    </form>
  )
}

export default AddForm;
