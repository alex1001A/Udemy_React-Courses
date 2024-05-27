import React, { useState } from "react";

import "./App.css";

import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    const todo = {
      id: uuidv4(),
      isComplete: false,
      text,
    };

    setTodos([...todos, todo]);
  }

  function deleteTodoHandler(id) {
    setTodos(todos.filter((todo) => id !== todo.id))
  }

  console.log(todos);

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList deleteTodo={deleteTodoHandler} todos={todos} />
    </div>
  );
}
