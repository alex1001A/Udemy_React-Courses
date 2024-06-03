import { NavLink, useParams } from "react-router-dom";

import courses from "../data/courses";

function SingleCourse() {
  const params = useParams();

  const course = courses.find((course) => course.slug === params.courseSlug);

  return (
    <>
      <h1>{course.title}</h1>
      <h2>{course.slug}</h2>
      <h3>{course.id}</h3>
      <NavLink to='..' relative="path">Courses</NavLink>
    </>
  );
}

export default SingleCourse;
