import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/Todos/TodoForm";
import TodoActions from "./components/Todos/TodoActions";
import TodoList from "./components/Todos/TodoList";

import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  const setToLocalStorage = (array, setArray) => {
    localStorage.setItem("todos", JSON.stringify(array));
    setArray(array);
  };

  const addTodoHandler = (text, setAction) => {
    const newTodo = {
      text,
      id: uuidv4(),
      isCompleted: false,
    };

    const newTodos = [...todos, newTodo];
    setToLocalStorage(newTodos, setTodos);
    setAction("");
  };

  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setToLocalStorage(newTodos, setTodos);
  };

  const deleteCompletedTodoHandler = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setToLocalStorage(newTodos, setTodos);
  };

  const comletedTodoHandler = (id) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    setToLocalStorage(newTodos, setTodos);
  };

  const isCompletedTasks = todos.filter((todo) => todo.isCompleted).length;

  const deleteAllTasksHandler = () => {
    setToLocalStorage([], setTodos);
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && <TodoActions deleteCompletedTodo={deleteCompletedTodoHandler} comletedTodosExist={!!isCompletedTasks} deleteAllTasks={deleteAllTasksHandler} />}
      {!!isCompletedTasks ? <h2>You have done {isCompletedTasks} tasks</h2> : ""}
      {!todos.length ? <h2>You don't have any tasks</h2> : <TodoList todos={todos} deleteTodo={deleteTodoHandler} comletedTodo={comletedTodoHandler} />}
    </div>
  );
}
