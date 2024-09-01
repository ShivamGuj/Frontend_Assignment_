const courseModel = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/150",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Navigation",
        content: "Understanding navigation in React Native.",
      },
      {
        week: 4,
        topic: "State Management",
        content: "Managing state in React Native applications.",
      },
    ],
    students: [
      { id: 101, name: "Alice Johnson", email: "alice@example.com" },
      { id: 102, name: "Bob Smith", email: "bob@example.com" },
    ],
  },
  {
    id: 2,
    name: "Advanced JavaScript Concepts",
    instructor: "Jane Doe",
    description:
      "Deep dive into advanced JavaScript topics including closures, prototypes, and async programming.",
    enrollmentStatus: "In Progress",
    thumbnail: "https://via.placeholder.com/150",
    duration: "6 weeks",
    schedule: "Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Closures and Scope",
        content: "Understanding closures and scope in JavaScript.",
      },
      {
        week: 2,
        topic: "Prototypes and Inheritance",
        content: "Diving into prototypes and inheritance.",
      },
      {
        week: 3,
        topic: "Async Programming",
        content: "Mastering async programming with promises and async/await.",
      },
      {
        week: 4,
        topic: "Advanced Functions",
        content:
          "Exploring advanced function concepts like currying and partial application.",
      },
    ],
    students: [
      { id: 101, name: "Alice Johnson", email: "alice@example.com" },
      { id: 103, name: "Charlie Brown", email: "charlie@example.com" },
    ],
  },
  {
    id: 3,
    name: "Web Development with Node.js",
    instructor: "Jack Smith",
    description:
      "Build scalable web applications using Node.js and Express.js.",
    enrollmentStatus: "Closed",
    thumbnail: "https://via.placeholder.com/150",
    duration: "10 weeks",
    schedule: "Mondays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["Basic web development knowledge", "JavaScript basics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Node.js",
        content: "Setting up Node.js and creating a simple server.",
      },
      {
        week: 2,
        topic: "Express.js Basics",
        content: "Building a basic web server with Express.js.",
      },
      {
        week: 3,
        topic: "Routing and Middleware",
        content: "Implementing routes and middleware in Express.js.",
      },
    ],
    students: [
      { id: 103, name: "Charlie Brown", email: "charlie@example.com" },
    ],
  },
];

export default courseModel;
