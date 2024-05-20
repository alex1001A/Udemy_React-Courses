import { useState } from 'react';

import './App.css';

import Button from './components/Button';
import Counter from './components/Counter';

export default function App() {

  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }
  
  return (
    <div className="App">
      <Counter count={count}/>
      <Button onClick={incrementCount}/>
      <Button onClick={incrementCount}/>
      <Button onClick={incrementCount}/>
      <Button onClick={incrementCount}/>
    </div>
  );
}


