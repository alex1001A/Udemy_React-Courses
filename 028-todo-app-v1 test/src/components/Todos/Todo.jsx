import styles from "./Todo.module.css";

import { RiArchiveDrawerLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

const Todo = ({ todo, deleteTodo, comletedTodo }) => {

const [editable, setEditable] = useState(false)

const changeContentEditablies = () => {
  setEditable(!editable)
}

  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.todoComplete : ""}`}>
      <RiArchiveDrawerLine className={styles.todoIcon} />
      <h4 contentEditable={editable}>{todo.text}</h4>
      <div className={styles.todoButtons}>
        <FaEdit style={editable ? {color: 'green'} : {color: 'red'}} onClick={changeContentEditablies}/>
        <FaCheck style={todo.isCompleted ? {color: 'green'} : {}} onClick={() => comletedTodo(todo.id)} />
        <FaRegTrashAlt onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default Todo;
