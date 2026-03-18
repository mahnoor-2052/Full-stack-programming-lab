import { useState } from "react";

function Actions() {
  const [message, setMessage] = useState(
    "> Hover buttons to change title color. Click to act.",
  );
  const [bgColor, setBgColor] = useState("#0a0a0a");
  const [titleColor, setTitleColor] = useState("#39ff14");

  const bgs = ["#0a0a0a", "#0a1a0a", "#0a0a1a", "#1a0a0a"];
  const [bgIdx, setBgIdx] = useState(0);

  const changeBg = () => {
    const next = (bgIdx + 1) % bgs.length;
    setBgIdx(next);
    setBgColor(bgs[next]);
    setMessage("> Background color changed!");
  };

  const btnStyle = (color, borderColor, bgCard) => ({
    padding: "14px 20px",
    borderRadius: "10px",
    fontSize: "14px",
    fontFamily: "'Courier New',monospace",
    cursor: "pointer",
    textAlign: "left",
    fontWeight: "600",
    letterSpacing: "1px",
    border: `1px solid ${borderColor}`,
    background: bgCard,
    color: color,
    display: "block",
    width: "100%",
    marginBottom: "12px",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060606",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Courier New',monospace",
      }}
    >
      <div
        style={{
          background: bgColor,
          border: "1px solid #1a2a1a",
          borderRadius: "16px",
          padding: "2.5rem 2rem",
          width: "100%",
          maxWidth: "420px",
          transition: "background .3s",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "700",
            color: titleColor,
            margin: "0 0 6px",
            transition: "color .2s",
          }}
        >
          Actions Panel
        </h2>
        <p
          style={{
            fontSize: "12px",
            color: "#4a7a4a",
            margin: "0 0 2rem",
            letterSpacing: "2px",
          }}
        >
          // EVENT HANDLING DEMO
        </p>

        <button
          style={btnStyle("#39ff14", "#1a3a1a", "#0a1a0a")}
          onMouseOver={() => setTitleColor("#39ff14")}
          onMouseOut={() => setTitleColor("#39ff14")}
          onClick={() => setMessage("> Hello! Message displayed successfully.")}
        >
          [01] Show Message
        </button>
        <button
          style={btnStyle("#14aaff", "#1a1a3a", "#0a0a1a")}
          onMouseOver={() => setTitleColor("#14aaff")}
          onMouseOut={() => setTitleColor("#39ff14")}
          onClick={changeBg}
        >
          [02] Change Background
        </button>
        <button
          style={btnStyle("#ff6b14", "#3a1a1a", "#1a0a0a")}
          onMouseOver={() => setTitleColor("#ff6b14")}
          onMouseOut={() => setTitleColor("#39ff14")}
          onClick={() => {
            alert("Alert triggered! Event handling works.");
          }}
        >
          [03] Show Alert
        </button>

        <div
          style={{
            background: "#111",
            border: "1px solid #1a2a1a",
            borderRadius: "8px",
            padding: "12px 14px",
            fontSize: "13px",
            color: "#39ff14",
            letterSpacing: "1px",
          }}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
export default Actions;
