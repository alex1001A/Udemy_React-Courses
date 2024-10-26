import styles from "./TodoList.module.css";

import Todo from "./Todo";

export default function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo}/>
      ))}
    </div>
  );
}
