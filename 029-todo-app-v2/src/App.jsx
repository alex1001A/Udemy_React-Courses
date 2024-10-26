import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo })));
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const comletedTodosCount = todos.filter((todo) => todo.isCompleted).length  

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && <TodosActions comletedTodosExist={!!comletedTodosCount} resetTodos={resetTodosHandler} deleteCompletedTodos={deleteCompletedTodosHandler} />}
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
      {
        comletedTodosCount > 0 && <h2>{`Yo have comleted ${comletedTodosCount} ${comletedTodosCount > 1 ? 'todos' : 'todo'}!`}</h2>
      }
    </div>
  );
}
