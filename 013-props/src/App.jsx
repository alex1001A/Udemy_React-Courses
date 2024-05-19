 import './App.css';
import PetInfo from './components/PetInfo';

 export default function App() {

  return (
    <div className="App">
      <PetInfo animal='cat' age={4}/>
      <PetInfo animal='duck' age={2}/>
    </div>
  );
}


