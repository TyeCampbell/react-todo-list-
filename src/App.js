import React from 'react';
import TodoList from './TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='app-header'><h1>My Todo List</h1></div>
      <TodoList/>
    </div>
  );
}

export default App;
