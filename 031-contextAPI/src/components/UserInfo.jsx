import UserContext from "../context/UserContext";
import { useContext } from "react";

const UserInfo = () => {
  const {user} = useContext(UserContext);
  
  // Тут обязательно надо передавать функцию, которая возвращает JSX!
  return <h1>{user}</h1>;
};
export default UserInfo;
