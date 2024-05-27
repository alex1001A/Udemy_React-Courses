import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);

    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new ToDo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
