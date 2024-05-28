import React, { useState } from "react";

import Todo from "./Todo";

import s from './TodoList.module.css'

function TodoList({ todos, deleteTodo, checkTodo }) {
  return (
    <div className={s.todoList}>
      {!todos.length ? (
        <h1>List is empty</h1>
      ) : (
        todos.map((todo) => <Todo checkTodo={checkTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo} />)
      )}
    </div>
  );
}

export default TodoList;
