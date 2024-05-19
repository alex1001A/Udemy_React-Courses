 import './App.css';
import PetInfo from './components/PetInfo';

 export default function App() {



  return (
    <div className="App">
      <PetInfo animal='cat' age={4} hasPet />
      <PetInfo animal='duck' age={2} hasPet={false} />
    </div>
  );
}


