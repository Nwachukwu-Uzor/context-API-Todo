import { useState, useContext } from 'react';
import './TodoInput.css';
import TodoContext from '../../context/todo-context';

const TodoInput = () => {
    const [todo, setTodo] = useState("");
    const { addTodo } = useContext(TodoContext);

    const onChangeHandler = e => {
        setTodo(e.target.value)
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        const newTodo = {
            id: Math.random(),
            text: todo,
            complete: false
        }

        addTodo(newTodo);
        setTodo("");
    }

    return (
        <div className="todo__body">
            <h1>useContext + useReducer TO-DO LIST</h1>
            <form onSubmit={onSubmitHandler}>
                <input
                    onChange={onChangeHandler} 
                    type="text" 
                    value={todo} 
                />
                <button>ADD</button>
            </form>
        </div>
    )
}

export default TodoInput;