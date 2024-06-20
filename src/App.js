//import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return (
    <div className='App'>
      <header className='todoListHeader'>
        <h1>Todo List</h1>
      </header>
    </div>
  );
}

function Table() {
  return (
    <div>
      <main>
          <table>
            <tr>
              <th>Todo</th>
              <th>whene</th>
              <th>done</th>
            </tr>
            <td>oi</td>
          </table>
      </main>
    </div>
  );
}

export default App, Table;
