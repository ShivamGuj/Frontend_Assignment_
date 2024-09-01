import React from "react";
import { Link } from "react-router-dom";
import courseModel from "../data/courseModel";

const CourseList = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Course Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courseModel.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <Link
              to={`/course/${course.id}`}
              className="text-blue-500 mt-4 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
