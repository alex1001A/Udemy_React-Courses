import React from "react";

import styles from "./TodoList.module.css";

import Todo from "./Todo";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length ? (
        <h2>ToDo list is empty</h2>
      ) : (
        todos.map((todo, index) => (
          <Todo deleteTodo={deleteTodo} index={index} key={index} todo={todo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
