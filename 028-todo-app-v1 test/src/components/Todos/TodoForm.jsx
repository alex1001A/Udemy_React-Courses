import { useState } from "react";

import styles from './TodoForm.module.css'

import Button from "../UI/Button";

const TodoForm = ({addTodo}) => {
  const [text, setText] = useState("");

  const addNewTaskHandler = (e) => {
    e.preventDefault()
    addTodo(text, setText)
  }

  return (
    <div className={styles.todoForm}>
      <input className={styles.todoInput} type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <Button type={'submit'} className={styles.todoButton} onClick={(e) => addNewTaskHandler(e)}>Add task</Button>
    </div>
  );
};

export default TodoForm;
