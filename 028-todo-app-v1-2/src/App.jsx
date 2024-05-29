import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import "./App.css";

import TodoForm from "./components/Todo/TodoForm";
import TodoActions from "./components/Todo/TodoActions";
import TodoList from "./components/Todo/TodoList";

const setDate = () => {
  const date = new Date().toString();
  return date;
};

export default function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  });

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
      date: setDate(),
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1></h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoActions />
      <TodoList todos={todos} />
    </div>
  );
}
