import React from "react";
import { useParams } from "react-router-dom";
import courseModel from "../data/courseModel";

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courseModel.find((c) => c.id === parseInt(courseId));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
      <img
        src={course.thumbnail}
        alt={course.name}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p>
        <strong>Description:</strong> {course.description}
      </p>
      <p>
        <strong>Enrollment Status:</strong> {course.enrollmentStatus}
      </p>
      <p>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p>
        <strong>Schedule:</strong> {course.schedule}
      </p>
      <p>
        <strong>Location:</strong> {course.location}
      </p>
      <p>
        <strong>Prerequisites:</strong> {course.prerequisites.join(", ")}
      </p>
      <div>
        <h2 className="text-xl font-semibold mt-4">Syllabus</h2>
        {course.syllabus.map((week) => (
          <details key={week.week} className="mb-2">
            <summary className="cursor-pointer">{`Week ${week.week}: ${week.topic}`}</summary>
            <p className="ml-4">{week.content}</p>
          </details>
        ))}
      </div>
      <h2 className="text-xl font-semibold mt-4">Enrolled Students</h2>
      <ul>
        {course.students.map((student) => (
          <li key={student.id} className="ml-4">
            {student.name} ({student.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
