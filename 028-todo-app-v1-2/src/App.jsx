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
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
      date: setDate(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const completeTodoHandler = (id, isCompleted) => {
    setTodos(
      todos.map((todo) => {
        return id === todo.id
          ? { ...todo, isCompleted: !isCompleted }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const countCompletedTodos = todos.filter(
    (todo) => todo.isCompleted === true
  ).length;

  const deleteCompletedTodosHandler = () => {
    setTodos(
      todos.filter((todo) => {
        return todo.isCompleted === false;
      })
    );
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length ? (
        <TodoActions
          deleteCompletedTodos={deleteCompletedTodosHandler}
          resetTodos={resetTodosHandler}
          countCompletedTodos={!!countCompletedTodos}
        />
      ) : (
        ""
      )}

      <TodoList
        completeTodo={completeTodoHandler}
        deleteTodo={deleteTodoHandler}
        todos={todos}
      />
      {!!countCompletedTodos ? (
        <h1>
          You have completed {countCompletedTodos}{" "}
          {countCompletedTodos > 1 ? "todos" : "todo"}!
        </h1>
      ) : (
        ""
      )}
    </div>
  );
}
