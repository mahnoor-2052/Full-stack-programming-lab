function StudentCard({ name, rollNo, department, university, color }) {
  const pastelThemes = {
    "#d0f0ff": {
      accent: "#5B9BD5",
      soft: "rgba(91,155,213,0.15)",
      label: "STUDENT",
    },
    "#d4f8d4": {
      accent: "#5BAD6F",
      soft: "rgba(91,173,111,0.15)",
      label: "STUDENT",
    },
    "#fff3cc": {
      accent: "#D4A017",
      soft: "rgba(212,160,23,0.15)",
      label: "STUDENT",
    },
  };

  const theme = pastelThemes[color] || {
    accent: "#A0A0B0",
    soft: "rgba(160,160,176,0.15)",
    label: "STUDENT",
  };

  return (
    <div
      style={{
        position: "relative",
        margin: "24px auto",
        maxWidth: "500px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector(".card-inner").style.transform =
          "translateY(-6px)";
        e.currentTarget.querySelector(".card-inner").style.boxShadow =
          `0 24px 50px ${theme.soft}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector(".card-inner").style.transform =
          "translateY(0)";
        e.currentTarget.querySelector(".card-inner").style.boxShadow =
          "0 4px 20px rgba(0,0,0,0.06)";
      }}
    >
      <div
        className="card-inner"
        style={{
          background: color,
          borderRadius: "20px",
          padding: "32px 36px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          border: `1px solid ${theme.accent}22`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            background: theme.soft,
          }}
        />

        {/* Top tag */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px",
              letterSpacing: "3px",
              color: theme.accent,
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            🎓 {theme.label}
          </span>
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px",
              color: `${theme.accent}99`,
              letterSpacing: "2px",
            }}
          >
            {rollNo}
          </span>
        </div>

        {/* Name */}
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "32px",
            fontWeight: "800",
            color: "#2D2D3A",
            margin: "0 0 6px 0",
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
          }}
        >
          {name}
        </h2>

        {/* Accent line */}
        <div
          style={{
            width: "36px",
            height: "3px",
            background: theme.accent,
            borderRadius: "10px",
            margin: "16px 0",
            opacity: 0.7,
          }}
        />

        {/* Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { label: "Department", value: department, icon: "📚" },
            { label: "University", value: university, icon: "🏛️" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(255,255,255,0.5)",
                borderRadius: "10px",
                padding: "10px 14px",
                backdropFilter: "blur(10px)",
              }}
            >
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <div>
                <p
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: theme.accent,
                    textTransform: "uppercase",
                    margin: "0 0 2px 0",
                    fontWeight: "700",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "15px",
                    color: "#2D2D3A",
                    margin: 0,
                    fontWeight: "600",
                  }}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
