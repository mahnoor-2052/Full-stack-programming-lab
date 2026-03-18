function CourseItem({ courseName, instructor, duration, type }) {
  return (
    <div
      style={{
        background:
          type === "Online"
            ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        borderRadius: "20px",
        padding: "2px",
        margin: "20px auto",
        maxWidth: "550px",
      }}
    >
      <div
        style={{
          background: "#0f0f1a",
          borderRadius: "18px",
          padding: "25px 30px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background:
              type === "Online"
                ? "rgba(102, 126, 234, 0.15)"
                : "rgba(245, 87, 108, 0.15)",
            filter: "blur(40px)",
          }}
        />

        {/* Badge */}
        <span
          style={{
            display: "inline-block",
            padding: "5px 15px",
            borderRadius: "30px",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase",
            background:
              type === "Online"
                ? "rgba(102, 126, 234, 0.2)"
                : "rgba(245, 87, 108, 0.2)",
            color: type === "Online" ? "#667eea" : "#f5576c",
            border: `1px solid ${type === "Online" ? "#667eea" : "#f5576c"}`,
            marginBottom: "15px",
          }}
        >
          {type === "Online" ? "🌐 Online" : "🏫 Offline"}
        </span>

        {/* Course Name */}
        <h2
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: "700",
            margin: "0 0 15px 0",
            lineHeight: "1.3",
          }}
        >
          {courseName}
        </h2>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            marginBottom: "15px",
          }}
        />

        {/* Info Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#888",
                fontSize: "11px",
                margin: "0",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Instructor
            </p>
            <p
              style={{
                color: "#e0e0e0",
                fontSize: "14px",
                margin: "4px 0 0 0",
                fontFamily: "'Segoe UI', sans-serif",
              }}
            >
              👨‍🏫 {instructor}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p
              style={{
                color: "#888",
                fontSize: "11px",
                margin: "0",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Duration
            </p>
            <p
              style={{
                color: "#e0e0e0",
                fontSize: "14px",
                margin: "4px 0 0 0",
                fontFamily: "'Segoe UI', sans-serif",
              }}
            >
              ⏱️ {duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
