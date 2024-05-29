import React, { useState } from "react";

import s from "./TodoForm.module.css";

import Button from '../UI/Button'



function TodoForm({ addTodo }) {

  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);

    setText("");
  };

  return (
    <div>
      <form className={s.form} onSubmit={onSubmitHandler}>
        <input
          className={s.inp}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
