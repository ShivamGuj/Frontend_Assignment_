import React, { useState } from "react";
import StudentLogin from "./StudentLogin";
import courseModel from "../data/courseModel";

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);

  if (!student) {
    return <StudentLogin setStudent={setStudent} />;
  }

  const enrolledCourses = courseModel.filter((course) =>
    student.enrolledCourses.includes(course.id)
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {student.name}</h1>
      <h2 className="text-xl font-semibold mb-4">Your Enrolled Courses</h2>
      {enrolledCourses.map((course) => (
        <div key={course.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <img
            src={course.thumbnail}
            alt={course.name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <h2 className="text-lg font-semibold mt-2">{course.name}</h2>
          <p>Instructor: {course.instructor}</p>
          <p>Duration: {course.duration}</p>
          <progress
            value={(course.syllabus.length / 8) * 100}
            max="100"
            className="w-full mt-2"
          ></progress>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">
            Mark as Completed
          </button>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
