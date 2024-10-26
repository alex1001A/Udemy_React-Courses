import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import courses from "../data/courses";

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.slug === params.courseSlug);

  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        Courses page
      </Link>
    </>
  );
};

export default SingleCourse;
