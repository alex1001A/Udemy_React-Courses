import React, { useState } from "react";

import s from "./TodoForm.module.css";

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
        <button className={s.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
