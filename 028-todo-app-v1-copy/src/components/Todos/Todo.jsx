import React from "react";

import s from "./Todo.module.css";

import { IoTrashBinSharp } from "react-icons/io5";
import { BsArchiveFill } from "react-icons/bs";
import { RiCheckLine } from "react-icons/ri";

// import Button from '../UI/Button';

function Todo({ todo, deleteTodo, checkTodo }) {

  function addClasses(isCompleted, name, mainClass) {
    return isCompleted ? `${name}` : `${mainClass}`;
  }

  return (
    <div className={addClasses(todo.isCompleted, s.checkedTodo, s.todo)}>
      <BsArchiveFill />
      <p className={s.todoText}>{todo.text}</p>
      <div className={s.buttonContainer}>
        <IoTrashBinSharp
          onClick={() => deleteTodo(todo.id)}
          className={addClasses(todo.isCompleted, s.checkedButton, s.deleteButton)}
        />
        <RiCheckLine onClick={() => checkTodo(todo.id, todo.isCompleted)} className={addClasses(todo.isCompleted, s.checkedButton, s.checkButton)} />
      </div>
    </div>
  );
}

export default Todo;
