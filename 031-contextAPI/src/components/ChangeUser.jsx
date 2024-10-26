import { useContext } from "react";

import UserContext from "../context/UserContext";

const ChangeUser = () => {
  const { setUser, typedValue, setTypedValue } = useContext(UserContext);

  const changeTitleNameHandler = (e) => {
    setTypedValue(e.target.value);
  };

  return (
    <>
      <input type="text" value={typedValue} onChange={changeTitleNameHandler} />
      <button onClick={() => setUser(typedValue)}>Change user</button>
    </>
  );
};

export default ChangeUser;
