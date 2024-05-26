 import React, {useState} from 'react'
 
 import './App.css';

 import TodoForm from './components/Todos/TodoForm';
 import TodoList from './components/Todos/TodoList';

 export default function App() {

  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler}/>
      <TodoList todos={todos}/>
    </div>
  );
}


