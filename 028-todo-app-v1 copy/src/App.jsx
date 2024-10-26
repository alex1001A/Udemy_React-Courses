import { useState } from "react";

import "./App.css";

import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('')

  const addTodo = () => {
    const newTodo = {task: value, id: Math.floor(Math.random() * 100)}
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    setValue('')
  }
  console.log(todos);

  const deleteTask = (index) => {
    console.log('hi');
    const newTodos = [...todos]
    setTodos(newTodos.filter((todo) => todo.id !== index))
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm value={value} setValue={setValue} onClick={addTodo}/>
      <TodoList todos={todos} onDeleteHandler={deleteTask}/>
    </div>
  );
}
