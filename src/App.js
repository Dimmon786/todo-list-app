import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className='App'>
      <header className='todoListHeader'>
        <h1>Todo List</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
