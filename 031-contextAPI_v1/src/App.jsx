import { useState } from "react";

import UserContext from "./context/UserContext";

import "./App.css";
import InfoPage from "./components/InfoPage";

export default function App() {
  const [user, setUser] = useState("Alex");

  const changeUserNameHandle = () => {
    setUser('Vlad')
  }

  return (
    <UserContext.Provider value={{user, changeUserNameHandle}}>
      <div className="App">
        <InfoPage />
      </div>
    </UserContext.Provider>
  );
}
