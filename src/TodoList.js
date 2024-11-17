import './App.css';
import React, { useState } from 'react';

function Todolist() {
    const [todos, setTodos] =useState([]);
    const [newTodo, setNewTodo] = useState('');

function addTodo() {
    if (newTodo.trim() !== '') {
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo('');
    }
}
    return (
      <main className='todoContainer'>
        <div>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Todo</th>
              <th>When</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.text}</td>
                <td>input type="checkbox" checked={todo.completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </main>
    );
  }

  export default Todolist;