 import './App.css';
import RandomNumber from './components/RandomNumber';

 export default function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={1000}/>
    </div>
  );
}


