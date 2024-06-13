import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import courses from "../data/courses";

import queryString from "query-string";

const SORT_KEYS = ["title", "slug", "id"];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

function Courses() {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      setSortKey();
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  console.log(sortKey);

  return (
    <div>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : "Courses"}</h1>
      {sortedCourses.map((course) => {
        return (
          <div key={course.id}>
            <NavLink className="courseLink" to={course.slug}>
              {course.title}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
