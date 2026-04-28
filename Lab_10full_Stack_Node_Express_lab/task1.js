const express = require("express");
const app = express();

const students = [
  { id: 1, name: "Ali Hassan", grade: "A+", subject: "Full Stack" },
  { id: 2, name: "Ahmed Raza", grade: "A", subject: "Web Dev" },
  { id: 3, name: "Sara Khan", grade: "A+", subject: "UI/UX" },
  { id: 4, name: "Zara Malik", grade: "B+", subject: "Node.js" },
  { id: 5, name: "Usman Tariq", grade: "A", subject: "React" },
  { id: 6, name: "Fatima Noor", grade: "A+", subject: "Express.js" },
];

app.get("/students", (req, res) => {
  const cards = students
    .map(
      (s) => `
    <div class="card" style="animation-delay: ${s.id * 0.1}s">
      <div class="card-id">#${String(s.id).padStart(2, "0")}</div>
      <div class="card-info">
        <h3>${s.name}</h3>
        <span class="subject">${s.subject}</span>
      </div>
      <div class="grade">${s.grade}</div>
    </div>
  `,
    )
    .join("");

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Student List</title>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap" rel="stylesheet">
      <style>
        :root {
          --bg: #050a18;
          --bg2: #0a1628;
          --cyan: #00f5ff;
          --pink: #ff006e;
          --purple: #7b2fff;
          --green: #00ff88;
          --card-bg: rgba(0, 245, 255, 0.03);
          --border: rgba(0, 245, 255, 0.15);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: var(--bg);
          font-family: 'Share Tech Mono', monospace;
          color: #cdd6f4;
          min-height: 100vh;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 20% 20%, rgba(123, 47, 255, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 80%, rgba(0, 245, 255, 0.1) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        /* Scanline effect */
        body::after {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 245, 255, 0.015) 2px,
            rgba(0, 245, 255, 0.015) 4px
          );
          pointer-events: none;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
          padding: 48px 24px;
        }

        header {
          text-align: center;
          margin-bottom: 52px;
        }

        .eyebrow {
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px;
          letter-spacing: 6px;
          color: var(--cyan);
          text-transform: uppercase;
          margin-bottom: 16px;
          opacity: 0.7;
        }

        h1 {
          font-family: 'Orbitron', monospace;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 900;
          line-height: 1.1;
          background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 60%, var(--pink) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: none;
          margin-bottom: 12px;
        }

        .subtitle {
          font-size: 13px;
          color: rgba(205, 214, 244, 0.4);
          letter-spacing: 2px;
        }

        .divider {
          width: 120px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          margin: 24px auto;
        }

        .stats-bar {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 48px;
          padding: 16px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 4px;
        }

        .stat { text-align: center; }
        .stat-num {
          font-family: 'Orbitron', monospace;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--cyan);
        }
        .stat-label {
          font-size: 10px;
          color: rgba(205, 214, 244, 0.4);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 16px;
        }

        .card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.3s ease;
          animation: slideIn 0.5s ease both;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--cyan), var(--purple));
          transform: scaleY(0);
          transition: transform 0.3s ease;
          transform-origin: bottom;
        }

        .card:hover {
          border-color: rgba(0, 245, 255, 0.4);
          background: rgba(0, 245, 255, 0.06);
          transform: translateX(6px);
          box-shadow: 0 0 30px rgba(0, 245, 255, 0.08);
        }

        .card:hover::before { transform: scaleY(1); }

        .card-id {
          font-family: 'Orbitron', monospace;
          font-size: 0.75rem;
          color: rgba(0, 245, 255, 0.3);
          font-weight: 700;
          min-width: 36px;
        }

        .card-info { flex: 1; }

        .card-info h3 {
          font-family: 'Orbitron', monospace;
          font-size: 1rem;
          font-weight: 700;
          color: #e6eaf5;
          margin-bottom: 4px;
        }

        .subject {
          font-size: 11px;
          color: var(--purple);
          letter-spacing: 2px;
          text-transform: uppercase;
          background: rgba(123, 47, 255, 0.1);
          padding: 2px 8px;
          border-radius: 2px;
          border: 1px solid rgba(123, 47, 255, 0.2);
        }

        .grade {
          font-family: 'Orbitron', monospace;
          font-size: 1.1rem;
          font-weight: 900;
          color: var(--green);
          text-shadow: 0 0 12px rgba(0, 255, 136, 0.5);
          min-width: 40px;
          text-align: right;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px) translateX(-10px); }
          to   { opacity: 1; transform: translateY(0) translateX(0); }
        }

        footer {
          text-align: center;
          margin-top: 52px;
          font-size: 11px;
          color: rgba(205, 214, 244, 0.2);
          letter-spacing: 3px;
          text-transform: uppercase;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <p class="eyebrow">⬡ BSSE-VI · Lab 10</p>
          <h1>Student Registry</h1>
          <p class="subtitle">NODE.JS + EXPRESS.JS · TASK 01</p>
          <div class="divider"></div>
        </header>

        <div class="stats-bar">
          <div class="stat">
            <div class="stat-num">${students.length}</div>
            <div class="stat-label">Enrolled</div>
          </div>
          <div class="stat">
            <div class="stat-num">${students.filter((s) => s.grade === "A+").length}</div>
            <div class="stat-label">A+ Students</div>
          </div>
          <div class="stat">
            <div class="stat-num">6</div>
            <div class="stat-label">Subjects</div>
          </div>
        </div>

        <div class="grid">
          ${cards}
        </div>

        <footer>© 2025 Full Stack Lab · Mr. Sharif Hussain</footer>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("✅ Task 1 running at http://localhost:3000/students");
});
