import React from "react";

import s from "./TodoActions.module.css";

import Button from "../UI/Button";

function TodoActions({
  resetTodos,
  countCompletedTodos,
  deleteCompletedTodos,
}) {
  return (
    <div className={s.todosActionsContainer}>
      <Button onClick={resetTodos} title="Reset">
        Reset
      </Button>
      <Button
        onClick={deleteCompletedTodos}
        disabled={countCompletedTodos ? false : true}
        title="Delete completed"
      >
        Delete completed
      </Button>
    </div>
  );
}

export default TodoActions;
