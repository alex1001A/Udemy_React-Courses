 import React, {useState} from 'react'
 
 import './App.css';

 import TodoForm from './components/Todos/TodoForm';
 import TodoList from './components/Todos/TodoList';

 export default function App() {

  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  function deleteTodoHandler(id) {
    setTodos(prevTodos => prevTodos.filter((_, index) => {
      return index !== id
    }))
  }

  console.log(todos);

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler}/>
      <TodoList removeTask={deleteTodoHandler} todos={todos}/>
    </div>
  );
}


