import React from "react";

import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

import styles from "./TodosActions.module.css";

import Button from "../UI/Button";

function TodosActions({resetTodos, clearComletedTodos}) {

  return (
    <>
      <Button title='Reset Todos' onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title='Clear Completed Todos' onClick={clearComletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;
