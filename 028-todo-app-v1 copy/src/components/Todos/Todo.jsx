import React from "react";

export default function Todo({ todo, onClick }) {
  const {task} = todo;

  return (
    <div className="todo" onDoubleClick={() => onClick(todo.id)}>
      <li>
        <p className="todo-task">{task}</p>
      </li>
    </div>
  );
}
