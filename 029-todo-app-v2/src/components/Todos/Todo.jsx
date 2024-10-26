import { RiTodoFill } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

import styles from "./Todo.module.css";

export default function Todo({ todo, deleteTodo, toggleTodo }) {

  return (
    <div className={todo.isCompleted ? `${styles.todo} ${styles.completedTodo}` : `${styles.todo}` }>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)}/>
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)}/>
    </div>
  );
}
