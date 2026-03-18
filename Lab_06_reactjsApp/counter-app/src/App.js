import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI',sans-serif",
      }}
    >
      <div
        style={{
          background: "#16162a",
          border: "1px solid #2a2a3e",
          borderRadius: "24px",
          padding: "3rem 2.5rem",
          textAlign: "center",
          minWidth: "340px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            color: "#6b6b8a",
            margin: "0 0 6px",
          }}
        >
          CURRENT COUNT
        </p>
        <h1
          style={{
            fontSize: "96px",
            color: "#e8e4ff",
            margin: "0 0 2rem",
            fontWeight: "700",
            lineHeight: 1,
          }}
        >
          {count}
        </h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "12px",
          }}
        >
          <button
            onClick={() => {
              if (count > 0) setCount(count - 1);
            }}
            disabled={count === 0}
            style={{
              background: "#2a2a3e",
              color: "#a78bfa",
              border: "1px solid #3d3d5c",
              borderRadius: "14px",
              padding: "13px 22px",
              fontSize: "14px",
              cursor: count === 0 ? "not-allowed" : "pointer",
              opacity: count === 0 ? 0.3 : 1,
            }}
          >
            − Decrement
          </button>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              background: "#a78bfa",
              color: "#0f0f1a",
              border: "none",
              borderRadius: "14px",
              padding: "13px 22px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            + Increment
          </button>
        </div>
        <button
          onClick={() => setCount(0)}
          style={{
            background: "transparent",
            color: "#6b6b8a",
            border: "1px solid #2a2a3e",
            padding: "9px 22px",
            borderRadius: "10px",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Counter;
