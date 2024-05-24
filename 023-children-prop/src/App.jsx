import "./App.css";
import Wrapper from "./components/Wrapper";

export default function App() {

  

  return (
    <div>
      <Wrapper color='lightblue'>
        <h2>Hello from first wrapper!</h2>
        <button>Close me!</button>
      </Wrapper>
      <Wrapper color='lightgreen'>
        <h2>Hello from first wrapper!</h2>
        <button>Close me!</button>
      </Wrapper>
    </div>
  );
}
