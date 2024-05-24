import React, { useState, useEffect } from "react";

import "./App.css";

export default function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/5")
      .then((response) => response.json())
      .then((json) => {
        setTodo(json);
        console.log(todo);
      });
    console.log("hi");
  }, []);

  console.log(todo, 'setTodo');
  console.log("App render");

  // fetch("https://jsonplaceholder.typicode.com/todos/5")
  //   .then((response) => response.json())
  //   .then((json) => setTodo(json))
  // При вызове функции изменения состояния (setTodo) - Реакт обновляет компонент,
  // и ререндеринг всех его дочерних компонентов

  // Так же в данном случае происходит следующее => мы парсим Промисы
  // и перезаписываем состояние компонента, с помощью setTodo() =>
  // т.к. произошло изменение состояния компонента то компонент перерендеривается,
  // и цикл перезаписи состояния повторяется бесконечно,
  // всё потому что это асинхронная функция.

  return <div className="App"></div>;
}
