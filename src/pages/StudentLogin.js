import React, { useState } from "react";

const studentData = [
  {
    id: 101,
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "alice123",
    enrolledCourses: [1, 2],
  },
  {
    id: 102,
    name: "Bob Smith",
    email: "bob@example.com",
    password: "bob123",
    enrolledCourses: [1],
  },
  {
    id: 103,
    name: "Charlie Brown",
    email: "charlie@example.com",
    password: "charlie123",
    enrolledCourses: [2, 3],
  },
];

const StudentLogin = ({ setStudent }) => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const student = studentData.find(
      (s) => s.id === parseInt(studentId) && s.password === password
    );
    if (student) {
      setStudent(student);
    } else {
      setError("Invalid ID or Password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Student Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700">Student ID</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default StudentLogin;
