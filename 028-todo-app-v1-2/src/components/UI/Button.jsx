import React from "react";

function Button({ children, title, disabled = false, onClick, countCompletedTodos }) {

  return (
    <button onClick={onClick} title={title} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
