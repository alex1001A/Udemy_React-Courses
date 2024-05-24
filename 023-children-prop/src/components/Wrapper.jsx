import React from "react";

function Wrapper(props) {

    const style = {
        background: props.color,
        margin: '20px auto',
        padding: '20px',
      }

  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
