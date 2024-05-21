import React, { useEffect, useState } from 'react'

import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

const texts = ['Click me1', 'Click me2', 'Click me3', 'Click me4']

export default function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState(texts)

  useEffect(() => {
    console.log('you change button text');
  }, [text])

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function changeText() {
    setText(prevTexts => prevTexts.map((item, index) => {
      return item.slice(0, 8) + index
    }))
  }

  function handleClick() {
    increment()
    changeText()
  }

  return (
    <div className="App">
      <Counter count={count} />
      {/* <Button text={text} upCount={increment}/> */}
      {
        text.map((item, index) => (<Button key={index} text={item} upCount={handleClick} />))
      }
    </div>
  );
}


