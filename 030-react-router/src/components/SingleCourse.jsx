import { useEffect } from "react";

import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import courses from "../data/courses";

// import NotFoundPage from "./NotFoundPage";

function SingleCourse() {
  const params = useParams();
  
  const navigate = useNavigate();

  
  const course = courses.find((course) => course.slug === params.courseSlug);
  
  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);

  // if (!course) {
  //   return <NotFoundPage/>
  // }
  // Ссылка та же "http://localhost:3000/main/courses/vue", пользователь никуда не перенаправляется
  //

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <NavLink to=".." relative="path">
        Courses
      </NavLink>
    </>
  );
}

export default SingleCourse;
