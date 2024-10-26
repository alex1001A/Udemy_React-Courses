import { useState } from "react";

import UserContext from "./context/UserContext";

import "./App.css";

import User from "./components/User";
import ChangeUser from "./components/ChangeUser";

export default function App() {
  const [user, setUser] = useState("Vlad");
  const [typedValue, setTypedValue] = useState('')

  return (
    <UserContext.Provider value={{user, setUser, typedValue, setTypedValue}}>
      <div className="App">
        <User />
        <ChangeUser/>
      </div>
    </UserContext.Provider>
  );
}
