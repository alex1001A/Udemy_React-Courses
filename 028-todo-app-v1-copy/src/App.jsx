import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./App.css";

import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

export default function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function setTodoDate() {
    const date = new Date().toString();

    return date;
  }

  const addTodoHandler = (text) => {
    const newTodo = {
      isCompleted: false,
      text: text,
      id: uuidv4(),
      date: setTodoDate(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== index;
      })
    );
  };

  const checkTodoHandler = (index, isCompleted) => {
    setTodos(
      todos.map((todo) => {
        if (index === todo.id) {
          return { ...todo, isCompleted: !isCompleted };
        }
        return { ...todo };
      })
    );
  };

  console.log(todos);

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        checkTodo={checkTodoHandler}
        deleteTodo={deleteTodoHandler}
        todos={todos}
      />
    </div>
  );
}
