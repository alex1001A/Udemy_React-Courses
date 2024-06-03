import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFoundPage from "./components/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
