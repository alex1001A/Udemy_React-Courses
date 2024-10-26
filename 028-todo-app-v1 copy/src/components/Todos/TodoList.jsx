import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, onDeleteHandler }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onClick={onDeleteHandler}/>
        ))}
      </ul>
    </div>
  );
}
