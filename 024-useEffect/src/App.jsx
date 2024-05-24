import React, { useState, useEffect } from "react";

import "./App.css";

export default function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/5")
      .then((response) => response.json())
      .then((json) => setTodo(json));
    console.log("Callback in useEffect called");
  }, []);
  // Если массив зависимостей пуст, то побочный эффект копмонента выполняется
  // всего один раз без перерендеринга всего компонента
  // Делается это для того, чтобы однократно выполнить fetch
  // запрос на сервер и больше на основании этого не перерисовывать компонент

  console.log("App render");
  console.log(todo);

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

  return (
    <div className="App">
      {todo && <h1>{todo.title}</h1>}
      {/* Если тут не воспользоваться опаратором "&&" то при первом рендеринге
      наше состояние [todo] = null, а следовательно будет ошибка => если todo есть ТО отрисуй <h1>{todo.title}</h1>
      ЕСЛИ нет - ничего не рисуй))*/}
    </div>
  );
}
