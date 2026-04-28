const express = require("express");
const app = express();

// Generate a consistent color from a name
function nameToColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return { hue, color: `hsl(${hue}, 70%, 65%)` };
}

// Get initials from name
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Fun facts / welcome messages
function getGreeting(name) {
  const greetings = [
    `You're doing amazing, ${name}! Keep pushing forward.`,
    `The world is better with you in it, ${name}.`,
    `Great to see you here, ${name}! Let's build something incredible.`,
    `${name} — a name worth remembering.`,
    `Welcome aboard, ${name}. Your journey starts here.`,
  ];
  const idx = name.length % greetings.length;
  return greetings[idx];
}

app.get("/user/:name", (req, res) => {
  const rawName = req.params.name;
  const name = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
  const initials = getInitials(name);
  const { hue, color } = nameToColor(name);
  const hue2 = (hue + 120) % 360;
  const hue3 = (hue + 240) % 360;
  const greeting = getGreeting(name);
  const joined = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello, ${name}!</title>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet">
      <style>
        :root {
          --c1: hsl(${hue}, 75%, 60%);
          --c2: hsl(${hue2}, 75%, 60%);
          --c3: hsl(${hue3}, 75%, 60%);
          --glass: rgba(255, 255, 255, 0.08);
          --glass-border: rgba(255, 255, 255, 0.14);
          --text: rgba(255, 255, 255, 0.92);
          --muted: rgba(255, 255, 255, 0.45);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          min-height: 100vh;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          background: #08001a;
        }

        /* Animated aurora background */
        .aurora {
          position: fixed;
          inset: -50%;
          z-index: 0;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
        }

        .blob-1 {
          width: 70vw; height: 70vw;
          background: radial-gradient(circle, hsl(${hue}, 80%, 45%) 0%, transparent 70%);
          top: -10%; left: -10%;
          animation: float1 12s ease-in-out infinite;
        }

        .blob-2 {
          width: 60vw; height: 60vw;
          background: radial-gradient(circle, hsl(${hue2}, 80%, 40%) 0%, transparent 70%);
          bottom: -10%; right: -10%;
          animation: float2 15s ease-in-out infinite;
        }

        .blob-3 {
          width: 50vw; height: 50vw;
          background: radial-gradient(circle, hsl(${hue3}, 80%, 40%) 0%, transparent 70%);
          top: 30%; left: 30%;
          animation: float3 10s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(5%, 8%) scale(1.05); }
          66% { transform: translate(-3%, 5%) scale(0.95); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-6%, -5%) scale(1.08); }
          66% { transform: translate(4%, -8%) scale(0.97); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-5%, 5%) rotate(10deg); }
        }

        /* Noise overlay */
        .noise {
          position: fixed;
          inset: 0;
          z-index: 1;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        /* Card */
        .card {
          position: relative;
          z-index: 2;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 48px 44px;
          max-width: 480px;
          width: 90%;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.05) inset,
            0 40px 80px rgba(0,0,0,0.4);
          animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          text-align: center;
        }

        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85) translateY(30px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Avatar */
        .avatar-wrap {
          margin-bottom: 28px;
        }

        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--c1), var(--c2), var(--c3));
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: white;
          margin: 0 auto;
          box-shadow: 0 0 0 4px rgba(255,255,255,0.1), 0 16px 40px rgba(0,0,0,0.3);
          animation: pulse 3s ease-in-out infinite;
          position: relative;
        }

        .avatar::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(135deg, var(--c1), var(--c2), var(--c3)) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: spin 4s linear infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(255,255,255,0.1), 0 0 30px rgba(255,255,255,0.05); }
          50% { box-shadow: 0 0 0 8px rgba(255,255,255,0.05), 0 0 50px rgba(255,255,255,0.1); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .hello-tag {
          display: inline-block;
          background: linear-gradient(90deg, var(--c1), var(--c2));
          border-radius: 100px;
          padding: 4px 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: white;
          margin-bottom: 16px;
        }

        h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 8vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .greeting {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 32px;
          font-style: italic;
        }

        .divider {
          height: 1px;
          background: var(--glass-border);
          margin: 0 0 28px;
        }

        .meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 28px;
        }

        .meta-item {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 14px;
          text-align: left;
        }

        .meta-label {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 4px;
        }

        .meta-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text);
        }

        .url-bar {
          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 13px;
          color: var(--muted);
          font-family: monospace;
          letter-spacing: 1px;
          word-break: break-all;
        }

        .url-bar span {
          color: var(--c1);
          font-weight: 600;
        }

        .try-links {
          margin-top: 20px;
          font-size: 12px;
          color: var(--muted);
        }

        .try-links a {
          color: var(--c1);
          text-decoration: none;
          margin: 0 6px;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        .try-links a:hover { opacity: 0.7; }
      </style>
    </head>
    <body>
      <div class="aurora">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>
      <div class="noise"></div>

      <div class="card">
        <div class="avatar-wrap">
          <div class="avatar">${initials}</div>
        </div>

        <span class="hello-tag">👋 Hello There</span>
        <h1>Hello, ${name}!</h1>
        <p class="greeting">${greeting}</p>

        <div class="divider"></div>

        <div class="meta-grid">
          <div class="meta-item">
            <div class="meta-label">Username</div>
            <div class="meta-value">${name}</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Visited</div>
            <div class="meta-value">${joined}</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Route</div>
            <div class="meta-value">/user/:name</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Lab</div>
            <div class="meta-value">Task 03</div>
          </div>
        </div>

        <div class="url-bar">
          http://localhost:3000/user/<span>${name}</span>
        </div>

        <div class="try-links">
          Try:
          <a href="/user/Ali">Ali</a>
          <a href="/user/Ahmed">Ahmed</a>
          <a href="/user/Sara">Sara</a>
          <a href="/user/Zara">Zara</a>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("✅ Task 3 running at http://localhost:3000/user/YourName");
});
