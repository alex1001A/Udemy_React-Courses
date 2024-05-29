import React, { useState } from "react";

function TodoForm({addTodo}) {
  const [value, setValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(value)

    setValue('')
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
