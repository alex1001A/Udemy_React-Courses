import { NavLink, useParams } from "react-router-dom";

import courses from "../data/courses";

const SingleCourse = () => {
  const params = useParams();

  const course = courses.find((c) => c.slug === params.courseSlug);

  return (
    <>
      <h2>{course.id}</h2>
      <h1>{course.title}</h1>
      <h3>{course.description}</h3>
      <NavLink to='..' relative="path">Back to courses</NavLink>
    </>
  );
};

export default SingleCourse;
