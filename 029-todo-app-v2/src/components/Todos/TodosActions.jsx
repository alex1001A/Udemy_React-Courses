import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

import Button from "../UI/Button";

import styles from './TodosActions.module.css'

export default function TodosActions({resetTodos, deleteCompletedTodos, comletedTodosExist}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title='Reset Todos' onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button disabled={!comletedTodosExist} title='Clear Completed Todos' onClick={deleteCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
