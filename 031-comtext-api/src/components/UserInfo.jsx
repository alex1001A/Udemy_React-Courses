import UserContext from "../Context/UserContext";
import { useContext } from "react";

export default function UserInfo() {
  const user = useContext(UserContext);

  return <h1>{user}</h1>;
}
