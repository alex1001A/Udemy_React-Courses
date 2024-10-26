import { GrPowerReset } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";

import styles from "./TodoActions.module.css";

import Button from "../UI/Button";

const TodoActions = ({ deleteAllTasks, comletedTodosExist, deleteCompletedTodo }) => {
  return (
    <div className={styles.todoActions}>
      <Button title='Reset Todos' onClick={deleteAllTasks}>
        <GrPowerReset />
      </Button>
      <Button title='Clear Completed Todos' onClick={deleteCompletedTodo} disabled={comletedTodosExist}>
        <FaRegTrashAlt />
      </Button>
    </div>
  );
};

export default TodoActions;
