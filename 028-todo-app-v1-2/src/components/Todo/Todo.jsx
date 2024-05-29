import React from "react";

import { RiArchive2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { RiCheckFill } from "react-icons/ri";

import s from "./Todo.module.css";

function Todo({ todo }) {
  return (
    <div>
      <RiArchive2Fill />
      <p>{todo.text}</p>
      <MdDelete />
      <RiCheckFill />
    </div>
  );
}

export default Todo;
