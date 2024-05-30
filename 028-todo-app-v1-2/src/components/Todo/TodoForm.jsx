import React, { useState } from "react";

import s from './TodoForm.module.css'
import Button from "../UI/Button";

function TodoForm({addTodo}) {
  const [value, setValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(value)

    setValue('')
  };

  return (
    <div className={s.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default TodoForm;
