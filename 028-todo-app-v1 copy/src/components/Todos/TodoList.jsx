import React, { useState } from "react";

import Todo from "./Todo";

function TodoList() {
  const data = JSON.parse(localStorage.getItem('data'))
  const [isArray, setIsArray] = useState(false);

//   if (data.length > 0) {
//     setIsArray(false)
//   }

  console.log(data.length);

  return (
    <div>
      {isArray ? (
        <h1>List is empty</h1>
      ) : (
        data.map((item) => {
          return <Todo key={item.id} item={item} />;
        })
      )}
    </div>
  );
}

export default TodoList;
