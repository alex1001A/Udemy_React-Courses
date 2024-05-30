import React from "react";

import Todo from "./Todo";

function TodoList({ todos, deleteTodo, completeTodo }) {
  return (
    <div>
      {!todos ? (
        <h2>List is empty</h2>
      ) : (
        todos.map((todo) => {
          return <Todo completeTodo={completeTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo}/>
        })
      )}
    </div>
  );
}

export default TodoList;
