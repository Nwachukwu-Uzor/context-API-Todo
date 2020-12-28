import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import './App.css';
import TodoState from './context/TodoState';

function App() {
  return (
    <div className="App">
      <TodoState>
        <TodoInput className="todo__input"/>
        <TodoList className="todo__list"/>
      </TodoState>
    </div>
  );
}

export default App;
