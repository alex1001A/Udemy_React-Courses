import SingleCourse from "./SingleCourse";

import courses from "../data/courses";

import { NavLink } from "react-router-dom";

const Courses = () => {
  return (
    <>
    <h1>Courses</h1>
    <ul>
      {courses.map((c) => (
        <li key={c.id}>
            <NavLink to={c.slug} element={<SingleCourse/>}>{c.title}</NavLink>
        </li>
      ))}
    </ul>
    </>
  );
};

export default Courses;
