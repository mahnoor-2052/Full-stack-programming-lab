function Greeting({ timeOfDay, name }) {
  const themes = {
    morning: {
      emoji: "🌅",
      message: "Rise and shine. Your best chapter starts now.",
      accent: "#FF6B35",
      glow: "rgba(255,107,53,0.3)",
      tag: "GOOD MORNING",
      num: "01",
    },
    afternoon: {
      emoji: "☀️",
      message: "Halfway there. Keep the momentum going strong.",
      accent: "#00C9A7",
      glow: "rgba(0,201,167,0.3)",
      tag: "GOOD AFTERNOON",
      num: "02",
    },
    evening: {
      emoji: "🌆",
      message: "Golden hour. You showed up — that is everything.",
      accent: "#C77DFF",
      glow: "rgba(199,125,255,0.3)",
      tag: "GOOD EVENING",
      num: "03",
    },
    night: {
      emoji: "🌙",
      message: "Rest now. Tomorrow you conquer again.",
      accent: "#4CC9F0",
      glow: "rgba(76,201,240,0.3)",
      tag: "GOOD NIGHT",
      num: "04",
    },
  };

  const t = themes[timeOfDay] || themes.morning;

  return (
    <div
      style={{
        position: "relative",
        margin: "28px auto",
        maxWidth: "560px",
        cursor: "default",
      }}
    >
      {/* Number watermark */}
      <span
        style={{
          position: "absolute",
          top: "-18px",
          right: "24px",
          fontSize: "100px",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: "900",
          color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
          userSelect: "none",
          zIndex: 0,
        }}
      >
        {t.num}
      </span>

      {/* Card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "4px",
          padding: "36px 40px",
          backdropFilter: "blur(20px)",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = `0 24px 60px ${t.glow}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "3px",
            background: t.accent,
            boxShadow: `0 0 20px ${t.glow}`,
          }}
        />

        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px",
              letterSpacing: "4px",
              color: t.accent,
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            {t.tag}
          </span>

          <span
            style={{
              fontSize: "36px",
              lineHeight: 1,
            }}
          >
            {t.emoji}
          </span>
        </div>

        {/* Name */}
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "38px",
            fontWeight: "700",
            color: "#F5F5F0",
            margin: "0 0 12px 0",
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
          }}
        >
          Hello,
          <br />
          <span style={{ color: t.accent }}>{name}</span>
        </h2>

        {/* Divider */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: t.accent,
            margin: "20px 0",
            opacity: 0.6,
          }}
        />

        {/* Message */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "17px",
            color: "rgba(245,245,240,0.6)",
            lineHeight: "1.7",
            margin: 0,
            fontStyle: "italic",
            letterSpacing: "0.2px",
          }}
        >
          {t.message}
        </p>

        {/* Bottom glow orb */}
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            right: "-40px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: t.glow,
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

export default Greeting;
