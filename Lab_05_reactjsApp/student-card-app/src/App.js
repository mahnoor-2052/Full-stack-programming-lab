import StudentCard from "./StudentCard";

function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(160deg, #fdf6f0 0%, #f0f4ff 50%, #f0fff4 100%)",
        minHeight: "100vh",
        padding: "60px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft background blobs */}
      <div
        style={{
          position: "fixed",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(208,240,255,0.4)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(212,248,212,0.4)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div style={{ maxWidth: "500px", margin: "0 auto 50px auto" }}>
        <p
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            letterSpacing: "4px",
            color: "#A0A0B0",
            textTransform: "uppercase",
            margin: "0 0 12px 0",
          }}
        >
          ◆ AIR UNIVERSITY
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "52px",
            fontWeight: "900",
            color: "#2D2D3A",
            margin: "0 0 12px 0",
            lineHeight: 1,
            letterSpacing: "-1px",
          }}
        >
          Student
          <br />
          <span style={{ color: "#5B9BD5" }}>Directory.</span>
        </h1>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "16px",
            color: "#888",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          Three students. Three stories.
        </p>
        <div
          style={{
            marginTop: "24px",
            height: "1px",
            background: "linear-gradient(90deg, #A0A0B030, transparent)",
          }}
        />
      </div>

      {/* Cards */}
      <StudentCard
        name="Ali Hassan"
        rollNo="BSSE-2101"
        department="Software Engineering"
        university="Air University"
        color="#d0f0ff"
      />
      <StudentCard
        name="Sara Khan"
        rollNo="BSSE-2102"
        department="Artificial Intelligence"
        university="Air University"
        color="#d4f8d4"
      />
      <StudentCard
        name="Usman Malik"
        rollNo="BSSE-2103"
        department="Cyber Security"
        university="Air University"
        color="#fff3cc"
      />
    </div>
  );
}

export default App;
