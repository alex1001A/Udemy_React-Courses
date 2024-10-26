import React from "react";

import { useContext } from "react";

import UserContext from "../context/UserContext";

const InfoPage = () => {
  const { user, changeUserNameHandle } = useContext(UserContext);

  return (
    <div className="container">
      <p>{user}</p>
      <button onClick={changeUserNameHandle}>Change name</button>
    </div>
  );
};

export default InfoPage;
