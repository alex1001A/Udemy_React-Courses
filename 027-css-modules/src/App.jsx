import "./App.css";

import Info from "./components/Info";

export default function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>App component heading</h1>
        <h2>App component</h2>
        <button className="my-button">App component button</button>
      </div>
    </div>
  );
}
