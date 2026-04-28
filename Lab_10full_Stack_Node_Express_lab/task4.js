const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Express App</title>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
      <style>
        :root {
          --forest: #1a3d2b;
          --mint: #3ecf8e;
          --sage: #7fb99a;
          --cream: #f7f4ef;
          --warm: #f0ebe2;
          --text: #1a2e22;
          --muted: #6b8a75;
          --line: #d8e8df;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          background: var(--cream);
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
          line-height: 1.6;
        }

        /* ── TOP BAR ── */
        .topbar {
          background: var(--forest);
          color: rgba(255,255,255,0.6);
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-align: center;
          padding: 8px 20px;
        }

        /* ── HERO ── */
        .hero {
          background: var(--forest);
          position: relative;
          overflow: hidden;
          padding: 80px 40px 100px;
          text-align: center;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 120%, rgba(62, 207, 142, 0.2) 0%, transparent 70%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='1' fill='rgba(255,255,255,0.04)'/%3E%3C/svg%3E");
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(62, 207, 142, 0.12);
          border: 1px solid rgba(62, 207, 142, 0.25);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 12px;
          letter-spacing: 2px;
          color: var(--mint);
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .hero-badge .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--mint);
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          line-height: 1.1;
          color: #ffffff;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        h1 em {
          font-style: italic;
          color: var(--mint);
        }

        .hero-sub {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.55);
          max-width: 500px;
          margin: 0 auto 36px;
          font-weight: 300;
          line-height: 1.7;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--mint);
          color: var(--forest);
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 1px;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 8px;
          transition: all 0.25s;
        }
        .hero-cta:hover {
          background: #5fd9a8;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(62, 207, 142, 0.35);
        }

        /* Wave divider */
        .wave {
          display: block;
          margin-top: -2px;
        }

        /* ── ABOUT SECTION ── */
        .section {
          padding: 80px 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--mint);
          font-weight: 500;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .section-label::after {
          content: '';
          flex: 1;
          max-width: 40px;
          height: 1px;
          background: var(--mint);
        }

        h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .lead {
          font-size: 1.05rem;
          color: var(--muted);
          max-width: 600px;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 40px;
        }

        /* ── COURSE LIST ── */
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
          margin-top: 12px;
        }

        .course-card {
          background: white;
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s;
          animation: fadeUp 0.5s ease both;
          position: relative;
          overflow: hidden;
        }

        .course-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--mint), var(--sage));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }

        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(26, 61, 43, 0.1);
          border-color: var(--sage);
        }

        .course-card:hover::before { transform: scaleX(1); }

        .course-icon {
          font-size: 2rem;
          margin-bottom: 12px;
          display: block;
        }

        .course-num {
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--mint);
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .course-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.15rem;
          color: var(--text);
          margin-bottom: 8px;
        }

        .course-desc {
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.6;
          font-weight: 300;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .course-card:nth-child(1) { animation-delay: 0.05s; }
        .course-card:nth-child(2) { animation-delay: 0.1s; }
        .course-card:nth-child(3) { animation-delay: 0.15s; }
        .course-card:nth-child(4) { animation-delay: 0.2s; }
        .course-card:nth-child(5) { animation-delay: 0.25s; }

        /* ── DIVIDER ── */
        .hr { height: 1px; background: var(--line); margin: 0 40px; }

        /* ── TECH SECTION ── */
        .tech-section {
          background: var(--forest);
          padding: 60px 40px;
          color: white;
        }

        .tech-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .tech-section h2 { color: white; }
        .tech-section .lead { color: rgba(255,255,255,0.5); }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 100px;
          padding: 8px 16px;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .pill:hover {
          background: rgba(62, 207, 142, 0.12);
          border-color: rgba(62, 207, 142, 0.3);
          color: var(--mint);
        }

        .pill-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--mint);
          flex-shrink: 0;
        }

        /* ── FOOTER ── */
        footer {
          background: var(--warm);
          border-top: 1px solid var(--line);
          padding: 32px 40px;
          text-align: center;
        }

        .footer-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 1.4rem;
          color: var(--forest);
          margin-bottom: 8px;
        }

        .footer-sub {
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @media (max-width: 680px) {
          .tech-inner { grid-template-columns: 1fr; gap: 32px; }
          .section { padding: 60px 24px; }
          .hero { padding: 60px 24px 80px; }
        }
      </style>
    </head>
    <body>

      <div class="topbar">Lab 10 · Node.js + Express · Task 04 · BSSE-VI · Mr. Sharif Hussain</div>

      <!-- HERO -->
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-badge">
            <span class="dot"></span>
            Express Server Live
          </div>
          <h1>Welcome to My<br><em>Express App</em></h1>
          <p class="hero-sub">
            A beautifully crafted full-stack web application built with Node.js and Express.js.
            Serving dynamic HTML straight from the server.
          </p>
          <a href="#about" class="hero-cta">
            Explore ↓
          </a>
        </div>
      </section>

      <svg class="wave" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60L60 48C120 36 240 12 360 6C480 0 600 12 720 18C840 24 960 24 1080 18C1200 12 1320 0 1380 0H1440V60H0Z" fill="#f7f4ef"/>
        <path d="M0 60L60 48C120 36 240 12 360 6C480 0 600 12 720 18C840 24 960 24 1080 18C1200 12 1320 0 1380 0H1440V60H0Z" fill="#f7f4ef"/>
      </svg>

      <!-- ABOUT -->
      <section class="section" id="about">
        <div class="section-label">About This Page</div>
        <h2>Simple. Clean.<br>Server-Rendered.</h2>
        <p class="lead">
          This page is served directly by an Express.js server running on Node.js.
          No React, no database — just clean HTML and CSS delivered straight from the backend.
        </p>
      </section>

      <div class="hr"></div>

      <!-- COURSES -->
      <section class="section">
        <div class="section-label">Curriculum</div>
        <h2>Subjects We Cover</h2>
        <p class="lead">Our BSSE-VI curriculum covers a wide range of modern full-stack technologies.</p>

        <div class="courses-grid">
          <div class="course-card">
            <span class="course-icon">⚡</span>
            <div class="course-num">01</div>
            <div class="course-name">Full Stack Programming</div>
            <div class="course-desc">End-to-end development using Node.js, Express, and modern frontend frameworks.</div>
          </div>
          <div class="course-card">
            <span class="course-icon">🌐</span>
            <div class="course-num">02</div>
            <div class="course-name">Web Technologies</div>
            <div class="course-desc">HTML, CSS, and JavaScript — the three pillars of modern web development.</div>
          </div>
          <div class="course-card">
            <span class="course-icon">🗄️</span>
            <div class="course-num">03</div>
            <div class="course-name">Data Structures</div>
            <div class="course-desc">Algorithms and data structures for building efficient software systems.</div>
          </div>
          <div class="course-card">
            <span class="course-icon">🔌</span>
            <div class="course-num">04</div>
            <div class="course-name">REST APIs</div>
            <div class="course-desc">Design and build RESTful APIs using GET, POST, PUT, and DELETE methods.</div>
          </div>
          <div class="course-card">
            <span class="course-icon">📦</span>
            <div class="course-num">05</div>
            <div class="course-name">Node.js & NPM</div>
            <div class="course-desc">Server-side JavaScript runtime and package management with npm ecosystem.</div>
          </div>
        </div>
      </section>

      <!-- TECH STACK -->
      <section class="tech-section">
        <div class="tech-inner">
          <div>
            <div class="section-label" style="color: var(--mint);">Stack</div>
            <h2>Built With</h2>
            <p class="lead">Modern, lightweight, and fast. The perfect stack for learning full-stack development.</p>
          </div>
          <div class="tech-pills">
            <div class="pill"><span class="pill-dot"></span> Node.js</div>
            <div class="pill"><span class="pill-dot"></span> Express.js</div>
            <div class="pill"><span class="pill-dot"></span> HTML5</div>
            <div class="pill"><span class="pill-dot"></span> CSS3</div>
            <div class="pill"><span class="pill-dot"></span> JavaScript</div>
            <div class="pill"><span class="pill-dot"></span> REST API</div>
            <div class="pill"><span class="pill-dot"></span> npm</div>
            <div class="pill"><span class="pill-dot"></span> VS Code</div>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer>
        <div class="footer-logo">ExpressApp</div>
        <div class="footer-sub">© 2025 · Full Stack Programming · BSSE-VI · Lab 10 · Mr. Sharif Hussain</div>
      </footer>

    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("✅ Task 4 running at http://localhost:3000");
});
