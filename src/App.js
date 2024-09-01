import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseList from "./pages/CourseList";
import CourseDetails from "./pages/CourseDetails";
import StudentDashboard from "./pages/StudentDashboard";

function App() {

    const dashboard = window.location.pathname.includes("dashboard");
  return (
    <Router>
      <nav>
        <ul className="flex justify-between bg-stone-200 text-black p-4 ">
          <li className="mx-2 hover:underline">
            <a href="/">Home</a>
          </li>
          {!dashboard && <li className="mx-2 hover:underline">
            <a href="/dashboard">Student-Dashboard</a>
          </li>}
        </ul>
      </nav>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
