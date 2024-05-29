import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./App.css";

import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoActions from "./components/Todos/TodoActions";

export default function App() {

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const resetTodoHandler = () => {
    setTodos([]);
  };
  const deletCompletedTodoHandler = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  console.log(completedTodosCount);

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
        completedTodosCount={completedTodosCount}
          deletCompletedTodo={deletCompletedTodoHandler}
          resetTodo={resetTodoHandler}
        />
      )}
      <TodoList
        checkTodo={checkTodoHandler}
        deleteTodo={deleteTodoHandler}
        todos={todos}
      />
      {
        !!completedTodosCount && <h1>You have completed {completedTodosCount} {completedTodosCount > 1 ? 'todos' : 'todo'}!</h1>
      }
    </div>
  );
}
