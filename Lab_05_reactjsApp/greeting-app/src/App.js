import Greeting from "./Greeting";

function App() {
  return (
    <div
      style={{
        background: "#0A0A0F",
        minHeight: "100vh",
        padding: "70px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background noise texture effect */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `radial-gradient(ellipse at 20% 20%, rgba(255,107,53,0.06) 0%, transparent 50%),
                          radial-gradient(ellipse at 80% 80%, rgba(76,201,240,0.06) 0%, transparent 50%)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ maxWidth: "560px", margin: "0 auto 60px auto" }}>
          <p
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px",
              letterSpacing: "5px",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              margin: "0 0 16px 0",
            }}
          >
            ◆ DAILY GREETINGS
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "58px",
              fontWeight: "900",
              color: "#F5F5F0",
              margin: "0 0 16px 0",
              lineHeight: 1,
              letterSpacing: "-1px",
            }}
          >
            Every Hour
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(245,245,240,0.3)",
                color: "transparent",
              }}
            >
              Has a Voice.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "16px",
              color: "rgba(245,245,240,0.4)",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Four greetings. Four moods. One day.
          </p>

          {/* Horizontal rule */}
          <div
            style={{
              marginTop: "32px",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.15), transparent)",
            }}
          />
        </div>

        {/* Cards */}
        <Greeting name="Ali Hassan" timeOfDay="morning" />
        <Greeting name="Sara Khan" timeOfDay="afternoon" />
        <Greeting name="Usman Malik" timeOfDay="evening" />
        <Greeting name="Fatima Noor" timeOfDay="night" />
      </div>
    </div>
  );
}

export default App;
