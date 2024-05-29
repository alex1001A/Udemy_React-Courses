import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./App.css";

import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from './components/Todos/TodosActions'

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

  const resetTodosHandler = () => {
    setTodos([])
  }

  const clearComletedTodosHandler = () => {
    setTodos(todos.filter((todo) => {
      return !todo.isCompleted
    }))
  }

  const comletedTodosCount = todos.filter((todo) => todo.isCompleted).length


  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      { !!todos.length &&
        <TodosActions 
        completedTodosExist={!!comletedTodosCount}
        // С помощью оператора "не-не (двойное отрицание)"" - 
        // мы конвертируем нашу переменную/счетчик завершенных задач в логическое выражение,
        // то есть на выходе получим "true" или "false".
        resetTodos={resetTodosHandler}
        clearComletedTodos={clearComletedTodosHandler}
        />
      }
      <TodoList
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
        todos={todos}
      />
      {!!comletedTodosCount ? <h2>You have completed {comletedTodosCount} {comletedTodosCount > 1 ? 'todos' : 'todo'}!</h2> : ''}
    </div>
  );
}
