import React from 'react';
//import './App.css';
import TodoComponent from './TodoComponent';
import TodoItem from './TodoItem';


function App() {

  const Todolist = TodoItem.map(item => <TodoComponent key={item.id} item = {item} />)

  return (
    <div>
      {Todolist}
    </div>
  );
}

export default App;
