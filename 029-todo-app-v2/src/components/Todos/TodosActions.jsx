import React from "react";

import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

import styles from "./TodosActions.module.css";

import Button from "../UI/Button";

function TodosActions({resetTodos, clearComletedTodos, completedTodosExist}) {

  return (
    <div className={styles.todosActionsContainer}>
      <Button title='Reset Todos' onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title='Clear Completed Todos' onClick={clearComletedTodos} disabled={!completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
