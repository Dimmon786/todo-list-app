import './App.css';
import React, { useState } from 'react';

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function addTodo() {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  }

    function toggleTodo(index) {
      const updatedTodos = todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    }

    function deleteTodo(index) {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    }



  return (
    <main className='todoContainer'>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add Todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Done</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</td>
              <td>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(index)}
                />
              </td>
              <td>
                <button onClick={() => deleteTodo(index)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Todolist;