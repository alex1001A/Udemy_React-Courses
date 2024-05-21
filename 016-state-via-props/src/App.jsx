import React, {useEffect, useState} from 'react'

import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

export default function App() {

  const [count, setCount] = useState(0)

  useEffect (() => {
    console.log(count);
  }, [count])

  function increment() {
    setCount(prevCount => prevCount + 1)
  }
  
  return (
    <div className="App">
      <Counter count={count}/>
      <Button upCount={increment}/>
    </div>
  );
}


