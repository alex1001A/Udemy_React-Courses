import React from "react";

import s from "./Button.module.css";

function Button(props) {
  const { children, type } = props;

  return (
    <button {...props} className={s.button} type={type}>
      {children}
    </button>
  );
}

export default Button;
