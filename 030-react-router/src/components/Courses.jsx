import courses from "../data/courses";

import { NavLink, useLocation } from "react-router-dom";

import queryString from "query-string";

function Courses() {
  const location = useLocation();

  console.log(location);

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
