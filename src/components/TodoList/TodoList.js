import { useContext } from 'react';
import TodoContext from '../../context/todo-context';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = () => {
    const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

    return (
        <div className="todo__list__1">
            <h1>TODOS</h1>
            <div>
                {todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        text={todo.text}
                        complete={todo.complete} 
                        clickToToggle={() => toggleTodo(todo.id)} 
                        clickToDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList;