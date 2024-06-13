import { useState } from "react";
import UserContext from "./Context/UserContext";

import "./App.css";

import User from "./components/User";

export default function App() {
  const [user, setUser] = useState("Alex");

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <User />
      </div>
    </UserContext.Provider>
  );
}
