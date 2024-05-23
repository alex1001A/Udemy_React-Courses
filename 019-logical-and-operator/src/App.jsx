import React, { useEffect, useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  // По сути эта запись заменяет onClick={() => setCount(0)}, а так -
  // мы просто передали название функции resetCount в обработчик
  // клика на кнопку.
  const resetCount = () => setCount(0);
  // onClick={() => setCount(0)} а здесь стрелочная функция нужна,
  // чтобы обновление состояние не происходило момендельно при монтировании компонента
  // и не вызывало рекурсии

  const buttonStyle = {
    background: "teal",
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button upCount={increment} />
      <Button upCount={increment} />
      <Button upCount={increment} />
      <Button upCount={increment} />
      <div>
        <button style={buttonStyle} onClick={resetCount}>
          Reset
        </button>
      </div>
    </div>
  );
}
