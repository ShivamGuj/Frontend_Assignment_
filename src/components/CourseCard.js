import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{course.name}</h2>
      <p className="text-gray-600">Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <p>Status: {course.status}</p>
      <Link
        to={`/course/${course.id}`}
        className="text-blue-500 mt-4 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;
