import React from "react";

import s from "./TodoActions.module.css";

import Button from "../UI/Button";

import { GrPowerReset } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";


function TodoActions({ deletCompletedTodo, resetTodo, completedTodosCount }) {
 
  return (
    <div className={s.todoButtonContainer}>
      <Button title="Reset Todo App" onClick={resetTodo}>
        <GrPowerReset />
      </Button>
      <Button
        disabled={!completedTodosCount}
        title="Delete completed todos"
        onClick={deletCompletedTodo}
      >
        <FaTrashAlt />
      </Button>
    </div>
  );
}

export default TodoActions;
