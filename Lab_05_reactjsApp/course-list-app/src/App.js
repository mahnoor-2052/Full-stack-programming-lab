import CourseItem from "./CourseItem";

function App() {
  const courses = [
    {
      courseName: "Full Stack Web Development",
      instructor: "Mr. Sharif Hussain",
      duration: "16 Weeks",
      type: "Online",
    },
    {
      courseName: "Data Structures & Algorithms",
      instructor: "Dr. Ahmed Raza",
      duration: "12 Weeks",
      type: "Offline",
    },
    {
      courseName: "Machine Learning Basics",
      instructor: "Ms. Ayesha Siddiqui",
      duration: "10 Weeks",
      type: "Online",
    },
    {
      courseName: "Database Management Systems",
      instructor: "Mr. Tariq Mehmood",
      duration: "8 Weeks",
      type: "Offline",
    },
    {
      courseName: "Cyber Security Fundamentals",
      instructor: "Dr. Imran Khan",
      duration: "14 Weeks",
      type: "Online",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)",
        minHeight: "100vh",
        padding: "50px 20px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <p
          style={{
            color: "#667eea",
            fontSize: "12px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontFamily: "'Segoe UI', sans-serif",
            marginBottom: "10px",
          }}
        >
          Air University
        </p>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "42px",
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: "800",
            margin: "0",
            background: "linear-gradient(135deg, #667eea, #f5576c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Course Catalog
        </h1>
        <p
          style={{
            color: "#555",
            marginTop: "10px",
            fontFamily: "'Segoe UI', sans-serif",
            fontSize: "14px",
          }}
        >
          {courses.length} courses available this semester
        </p>
      </div>

      {/* Cards */}
      {courses.map((course, index) => (
        <CourseItem
          key={index}
          courseName={course.courseName}
          instructor={course.instructor}
          duration={course.duration}
          type={course.type}
        />
      ))}
    </div>
  );
}

export default App;
