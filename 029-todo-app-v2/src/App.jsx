import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./App.css";

import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const addTodoHandler = (text) => {
    const newTodo = {
      task: text,
      isCompleted: isCompleted,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  function deleteTodoHandler(id) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => {
        return todo.id !== id;
      })
    );
  }

  console.log(todos);

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
        todos={todos}
      />
    </div>
  );
}
