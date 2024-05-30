import React from "react";

import s from "./Button.module.css";

function Button(props) {
  const { children, disabled = false, onClick, type } = props;

  return (
    <button onClick={onClick} className={s.button} disabled={disabled} type={type}>
      {children}
    </button>
  );
}

export default Button;
