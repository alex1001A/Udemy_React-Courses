import courses from "../data/courses";

import { NavLink } from "react-router-dom";

function Courses() {
  return (
    <div>
      <h1>Courses</h1>
      {courses.map((item) => {
        return (
          <div key={item.id}>
            <NavLink className="courseLink" to={item.slug}>
              {item.title}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
