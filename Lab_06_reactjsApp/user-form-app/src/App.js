import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = () => {
    if (!name || !email) {
      alert("Please fill in both fields!");
      return;
    }
    setSubmitted({ name, email });
    setName("");
    setEmail("");
  };

  const inp = {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    border: "1.5px solid #d9c4a6",
    borderRadius: "10px",
    fontSize: "14px",
    background: "#fff8f0",
    color: "#3d2b1f",
    outline: "none",
    fontFamily: "inherit",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5ebe0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI',sans-serif",
      }}
    >
      <div
        style={{
          background: "#fdf6ee",
          border: "1px solid #e8d5b7",
          borderRadius: "20px",
          padding: "2.5rem 2rem",
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#3d2b1f",
            margin: "0 0 6px",
          }}
        >
          User Profile
        </h2>
        <p style={{ fontSize: "13px", color: "#9c7a5a", margin: "0 0 2rem" }}>
          Fill in your details below
        </p>

        <label
          style={{
            display: "block",
            fontSize: "12px",
            fontWeight: "600",
            color: "#7a5a3a",
            letterSpacing: "1px",
            marginBottom: "6px",
          }}
        >
          NAME
        </label>
        <input
          style={inp}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
        />

        <label
          style={{
            display: "block",
            fontSize: "12px",
            fontWeight: "600",
            color: "#7a5a3a",
            letterSpacing: "1px",
            margin: "1.2rem 0 6px",
          }}
        >
          EMAIL
        </label>
        <input
          style={inp}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
        />

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "14px",
            background: "#c4813a",
            color: "#fff8f0",
            border: "none",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "1.2rem",
          }}
        >
          Submit
        </button>

        {submitted && (
          <div
            style={{
              marginTop: "1.5rem",
              background: "#fff",
              border: "1px solid #e8d5b7",
              borderRadius: "12px",
              padding: "1rem 1.2rem",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#9c7a5a",
                letterSpacing: "1px",
                margin: "0 0 10px",
              }}
            >
              SUBMITTED DATA
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
                padding: "5px 0",
                borderBottom: "1px solid #f0e4d0",
                color: "#3d2b1f",
              }}
            >
              <span style={{ color: "#9c7a5a" }}>Name</span>
              <span>{submitted.name}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
                padding: "5px 0",
                color: "#3d2b1f",
              }}
            >
              <span style={{ color: "#9c7a5a" }}>Email</span>
              <span>{submitted.email}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default UserForm;
