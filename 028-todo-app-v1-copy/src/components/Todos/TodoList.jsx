import React, { useState } from "react";

import Todo from "./Todo";

function TodoList({ todos, deleteTodo }) {
  return (
    <div
      style={{
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: '15px'
      }}
    >
      {!todos.length ? (
        <h2>List is empty</h2>
      ) : (
        todos.map((item) => <Todo  key={item.id} deleteTodo={deleteTodo} item={item} />)
      )}
    </div>
  );
}

export default TodoList;
