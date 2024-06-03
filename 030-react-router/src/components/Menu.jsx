import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <NavLink
        // className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="."
        end
      >
        Home
      </NavLink>
      {/* Надо добавить св-во END чтобы убрать класс active
        с корневого пути, в нашем случае это <Home/> */}
      <NavLink
        // className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        // className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="contacts"
      >
        Contacts
      </NavLink>
      {/* Относительные пути, а не абсолютные, это ВАЖНО! */}
      <NavLink
        to="courses"
      >
        Courses
      </NavLink>
    </nav>
  );
}

export default Menu;
