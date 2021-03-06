import React, { useState } from 'react';
import './App.scss';
// import ColorBox from './components/ColorBox/ColorBox.jsx'
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React hooks - TodoList</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      {/* <ColorBox /> */}
    </div>
  );
}

export default App;
