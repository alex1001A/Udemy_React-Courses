import React from "react";

import { RiArchive2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { RiCheckFill } from "react-icons/ri";

import s from "./Todo.module.css";

function Todo({ todo, deleteTodo, completeTodo }) {

  // const completeTodoHandler = () => {

  // }

  return (
    <div className={todo.isCompleted ? `${s.todo} ${s.completedTodo}` : `${s.todo}`}>
      <RiArchive2Fill className={s.todoIcon}/>
      <p className={s.todoText}>{todo.text}</p>
      <MdDelete onClick={() => deleteTodo(todo.id)} className={s.deleteIcon}/>
      <RiCheckFill onClick={() => completeTodo(todo.id, todo.isCompleted)} className={s.checkIcon}/>
    </div>
  );
}

export default Todo;
