const express = require("express");
const app = express();

function renderPage({
  title,
  emoji,
  message,
  description,
  color,
  accent,
  route,
}) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Lora:ital@0;1&display=swap" rel="stylesheet">
      <style>
        :root {
          --paper: #fdf6ec;
          --ink: #1a120b;
          --accent: ${accent};
          --muted: #8b7355;
          --line: #d4c4a8;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: var(--paper);
          font-family: 'Lora', Georgia, serif;
          color: var(--ink);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Texture overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23fdf6ec'/%3E%3Ccircle cx='1' cy='1' r='0.5' fill='%23d4c4a8' opacity='0.3'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        /* Top banner */
        .banner {
          background: var(--accent);
          color: white;
          text-align: center;
          padding: 8px;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-family: 'Lora', serif;
          position: relative;
          z-index: 1;
        }

        /* Masthead */
        .masthead {
          border-bottom: 3px double var(--line);
          padding: 24px 40px 20px;
          position: relative;
          z-index: 1;
        }

        .masthead-inner {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 2.2rem;
          color: var(--ink);
          letter-spacing: -1px;
        }

        .brand span { color: var(--accent); font-style: italic; }

        .issue-info {
          text-align: right;
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 1px;
          line-height: 1.8;
        }

        /* Nav */
        nav {
          border-bottom: 1px solid var(--line);
          position: relative;
          z-index: 1;
        }

        nav ul {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 40px;
          list-style: none;
          display: flex;
          gap: 0;
        }

        nav a {
          display: block;
          padding: 12px 20px;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--muted);
          border-bottom: 3px solid transparent;
          transition: all 0.2s;
          font-family: 'Lora', serif;
        }

        nav a:hover, nav a.active {
          color: var(--ink);
          border-bottom-color: var(--accent);
        }

        /* Main content */
        main {
          flex: 1;
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
          padding: 60px 40px;
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 60px;
          align-items: start;
        }

        .article {
        }

        .category-tag {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent);
          border-bottom: 2px solid var(--accent);
          padding-bottom: 2px;
          margin-bottom: 20px;
          font-family: 'Lora', serif;
        }

        .big-emoji {
          font-size: 4rem;
          margin-bottom: 20px;
          display: block;
          line-height: 1;
        }

        h1 {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          line-height: 1.1;
          color: var(--ink);
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .drop-cap::first-letter {
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem;
          font-weight: 900;
          float: left;
          line-height: 0.8;
          margin: 4px 8px 0 0;
          color: var(--accent);
        }

        p.drop-cap {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #3d2c1e;
          margin-bottom: 20px;
          overflow: hidden;
        }

        p.body-text {
          font-size: 1rem;
          line-height: 1.8;
          color: #4a3728;
          margin-bottom: 16px;
          font-style: italic;
        }

        .pull-quote {
          border-left: 4px solid var(--accent);
          padding: 12px 20px;
          margin: 28px 0;
          background: rgba(0,0,0,0.02);
        }

        .pull-quote p {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.2rem;
          color: var(--ink);
          line-height: 1.5;
        }

        /* Sidebar */
        .sidebar {
          border-left: 1px solid var(--line);
          padding-left: 32px;
        }

        .sidebar-section {
          margin-bottom: 36px;
        }

        .sidebar-title {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 16px;
          padding-bottom: 6px;
          border-bottom: 1px solid var(--line);
          font-family: 'Lora', serif;
        }

        .route-list { list-style: none; }
        .route-list li {
          padding: 10px 0;
          border-bottom: 1px solid var(--line);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .route-list a {
          text-decoration: none;
          color: var(--ink);
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        .route-list a:hover { color: var(--accent); }
        .route-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .route-dot.active { background: var(--accent); }
        .route-dot.inactive { background: var(--line); }

        .info-box {
          background: ${color};
          border-radius: 2px;
          padding: 16px;
        }
        .info-box p {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--muted);
          font-style: italic;
        }

        /* Footer */
        footer {
          border-top: 3px double var(--line);
          padding: 20px 40px;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        footer p {
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @media (max-width: 680px) {
          main { grid-template-columns: 1fr; }
          .sidebar { border-left: none; border-top: 1px solid var(--line); padding-left: 0; padding-top: 32px; }
        }
      </style>
    </head>
    <body>
      <div class="banner">Lab 10 · Node.js + Express · Task 02 · BSSE-VI</div>

      <header class="masthead">
        <div class="masthead-inner">
          <div class="brand">Express<span>Times</span></div>
          <div class="issue-info">
            <div>Vol. 1, Issue 10</div>
            <div>Full Stack Programming</div>
            <div>Mr. Sharif Hussain</div>
          </div>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="/home" class="${route === "home" ? "active" : ""}">Home</a></li>
          <li><a href="/about" class="${route === "about" ? "active" : ""}">About</a></li>
          <li><a href="/contact" class="${route === "contact" ? "active" : ""}">Contact</a></li>
        </ul>
      </nav>

      <main>
        <article class="article">
          <span class="category-tag">${route.toUpperCase()} SECTION</span>
          <span class="big-emoji">${emoji}</span>
          <h1>${title}</h1>

          <p class="drop-cap">${message}</p>

          <div class="pull-quote">
            <p>"${description}"</p>
          </div>

          <p class="body-text">
            This page is served dynamically by an Express.js server running on Node.js.
            Each route renders a unique styled response directly from the server.
          </p>
        </article>

        <aside class="sidebar">
          <div class="sidebar-section">
            <div class="sidebar-title">Navigate</div>
            <ul class="route-list">
              <li>
                <span class="route-dot ${route === "home" ? "active" : "inactive"}"></span>
                <a href="/home">/ home — Welcome Page</a>
              </li>
              <li>
                <span class="route-dot ${route === "about" ? "active" : "inactive"}"></span>
                <a href="/about">/ about — About Page</a>
              </li>
              <li>
                <span class="route-dot ${route === "contact" ? "active" : "inactive"}"></span>
                <a href="/contact">/ contact — Contact Page</a>
              </li>
            </ul>
          </div>

          <div class="sidebar-section">
            <div class="sidebar-title">About This Lab</div>
            <div class="info-box">
              <p>Built with Node.js and Express.js as part of Lab 10 — Full Stack Programming. Each route returns styled HTML directly from the server.</p>
            </div>
          </div>
        </aside>
      </main>

      <footer>
        <p>© 2025 · Full Stack Programming · BSSE-VI · Lab 10</p>
      </footer>
    </body>
    </html>
  `;
}

app.get("/home", (req, res) => {
  res.send(
    renderPage({
      title: "Welcome Home",
      emoji: "🏠",
      route: "home",
      message:
        "Welcome Home! You have arrived at the main landing page of our Express.js application. This is where your journey begins — a warm, inviting space built entirely with Node.js and served fresh from the server.",
      description: "Every great application starts with a home. This is yours.",
      color: "rgba(234, 179, 8, 0.06)",
      accent: "#b45309",
    }),
  );
});

app.get("/about", (req, res) => {
  res.send(
    renderPage({
      title: "About This App",
      emoji: "📖",
      route: "about",
      message:
        "This application was created as part of Lab 10 for the Full Stack Programming course at BSSE-VI. It demonstrates Express.js routing, dynamic HTML rendering, and server-side styling — all without a database.",
      description:
        "Built with passion, served with Express, styled with purpose.",
      color: "rgba(16, 185, 129, 0.06)",
      accent: "#065f46",
    }),
  );
});

app.get("/contact", (req, res) => {
  res.send(
    renderPage({
      title: "Get In Touch",
      emoji: "✉️",
      route: "contact",
      message:
        "Have a question or want to collaborate? Reach out to the instructor at sharifali.aulecturer@gmail.com. We are always happy to hear from students who are passionate about full stack development.",
      description: "Great things happen when curious minds connect.",
      color: "rgba(59, 130, 246, 0.06)",
      accent: "#1e40af",
    }),
  );
});

app.listen(3000, () => {
  console.log("✅ Task 2 running at http://localhost:3000/home");
});
