/* =====================================================
   ROOT
===================================================== */

:root {
  --bg: #0b0c0f;
  --surface: #111318;
  --surface-2: #15171d;

  --text: #f4f4f1;
  --muted: #b5b6bd;

  --line: #292b33;

  --accent: #8b5cf6;
  --accent-pink: #ec4899;

  --success: #4ade80;

  --max: 1280px;
}


/* =====================================================
   RESET
===================================================== */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: "Poppins", sans-serif;
  background: var(--bg);
  color: var(--text);
  font-size: 16px;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
}


/* =====================================================
   APP
===================================================== */

.app {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
}


/* =====================================================
   COMMON CONTAINER
===================================================== */

.portfolio-container {
  width: min(94%, var(--max));
  margin: 0 auto;
}


/* =====================================================
   NAVBAR
===================================================== */

.site-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;

  width: 100%;
  height: 76px;

  background: rgba(11, 12, 15, 0.92);

  border-bottom: 1px solid var(--line);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.navbar-inner {
  width: min(94%, var(--max));
  height: 100%;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* =====================================================
   LOGO
===================================================== */

.logo {
  display: flex;
  align-items: center;

  gap: 10px;

  font-size: 1rem;
  font-weight: 800;

  white-space: nowrap;
}

.logo b {
  display: grid;
  place-items: center;

  width: 34px;
  height: 34px;

  border-radius: 9px;

  background: var(--text);
  color: var(--bg);
}

.accent {
  color: var(--accent);
}


/* =====================================================
   NAVIGATION
===================================================== */

.site-nav {
  display: flex;
  align-items: center;

  gap: 25px;
}

.site-nav a {
  position: relative;

  color: var(--muted);

  font-size: 0.9rem;

  text-transform: capitalize;

  transition: color 0.2s ease;
}

.site-nav a:hover {
  color: var(--text);
}


/* =====================================================
   MOBILE MENU BUTTON
===================================================== */

.menu-btn {
  display: none;

  border: 1px solid var(--line);

  background: var(--surface);
  color: var(--text);

  cursor: pointer;

  width: 40px;
  height: 40px;

  border-radius: 8px;

  font-size: 1.1rem;
}


/* =====================================================
   SECTIONS
===================================================== */

.section {
  width: 100%;

  padding: 110px 0;
}

.section-dark {
  background: #101116;
}


/* =====================================================
   HERO
===================================================== */

.hero {
  min-height: calc(100vh - 76px);

  display: flex;
  align-items: center;

  padding-top: 90px;
  padding-bottom: 90px;

  background: var(--bg);
}

.hero .row {
  width: 100%;
}


/* =====================================================
   HERO CONTENT
===================================================== */

.hero-content {
  width: 100%;
  max-width: 760px;
}

.hero-eyebrow {
  margin: 0 0 24px;

  color: var(--accent);

  font:
    500 0.78rem "DM Mono",
    monospace;

  letter-spacing: 0.18em;

  text-transform: uppercase;
}

.hero h1 {
  max-width: 780px;

  margin: 0;

  color: var(--text);

  font-size: clamp(3.2rem, 5.4vw, 5.2rem);

  line-height: 1.02;

  letter-spacing: -0.055em;

  font-weight: 800;
}

.gradient {
  display: inline-block;

  background: linear-gradient(
    100deg,
    var(--accent),
    var(--accent-pink)
  );

  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;

  color: transparent;
}


/* =====================================================
   HERO TEXT
===================================================== */

.hero-text {
  max-width: 680px;

  margin: 30px 0 0;

  color: var(--muted);

  font-size: 1rem;

  line-height: 1.85;
}


/* =====================================================
   HERO META
===================================================== */

.hero-meta {
  display: flex;
  align-items: stretch;

  width: fit-content;

  margin: 32px 0;

  border: 1px solid var(--line);

  border-radius: 12px;

  background: var(--surface);

  overflow: hidden;
}

.hero-meta-item {
  min-width: 125px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 5px;

  padding: 17px 20px;
}

.hero-meta-item strong {
  color: var(--text);

  font-size: 0.95rem;

  font-weight: 700;

  line-height: 1.2;
}

.hero-meta-item span {
  color: var(--muted);

  font-size: 0.7rem;

  line-height: 1.4;

  white-space: nowrap;
}

.hero-meta-divider {
  width: 1px;

  margin: 14px 0;

  background: var(--line);
}


/* =====================================================
   BUTTONS
===================================================== */

.actions {
  display: flex;
  align-items: center;

  gap: 10px;

  flex-wrap: wrap;

  margin-top: 6px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  min-height: 46px;

  padding: 12px 18px;

  border: 1px solid var(--line);

  border-radius: 9px;

  background: transparent;

  color: var(--text);

  font-size: 0.82rem;

  font-weight: 600;

  white-space: nowrap;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);

  color: var(--text);

  border-color: #444750;

  background: var(--surface);
}

.btn.primary {
  background: var(--text);

  color: var(--bg);

  border-color: var(--text);
}

.btn.primary:hover {
  background: #ffffff;

  color: #000000;
}


/* =====================================================
   HERO TECHNOLOGIES
===================================================== */

.hero-technologies {
  margin-top: 34px;
}

.tech-label {
  display: block;

  margin-bottom: 12px;

  color: #777983;

  font:
    500 0.65rem "DM Mono",
    monospace;

  letter-spacing: 0.13em;

  text-transform: uppercase;
}

.tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 0;
}

.tags span {
  padding: 7px 11px;

  border: 1px solid var(--line);

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.02);

  color: var(--muted);

  font-size: 0.7rem;

  line-height: 1;

  white-space: nowrap;

  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background 0.2s ease;
}

.tags span:hover {
  color: var(--text);

  border-color: #41434d;

  background: var(--surface);
}


/* =====================================================
   HERO VISUAL
===================================================== */

.hero-visual {
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;
}


/* =====================================================
   CODE CARD
===================================================== */

.code-card {
  width: 100%;

  max-width: 500px;

  overflow: hidden;

  border: 1px solid var(--line);

  border-radius: 16px;

  background: var(--surface);

  box-shadow:
    0 25px 70px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.02);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.code-card:hover {
  transform: translateY(-4px);

  border-color: #383a44;
}


/* =====================================================
   CODE CARD BAR
===================================================== */

.bar {
  display: flex;
  align-items: center;

  gap: 10px;

  padding: 14px 18px;

  border-bottom: 1px solid var(--line);

  color: var(--muted);

  font:
    12px "DM Mono",
    monospace;
}

.window-dots {
  color: #666872;

  font-size: 10px;

  letter-spacing: 2px;
}


/* =====================================================
   CODE
===================================================== */

.code-card pre {
  max-width: 100%;

  margin: 0;

  padding: 25px 26px;

  color: #bfc0c8;

  font:
    12px/1.85 "DM Mono",
    monospace;

  white-space: pre-wrap;

  overflow-x: auto;
}


/* =====================================================
   AVAILABILITY
===================================================== */

.availability {
  display: flex;
  align-items: center;

  gap: 9px;

  margin: 0 18px 18px;

  padding: 11px 13px;

  border: 1px solid var(--line);

  border-radius: 8px;

  background: var(--bg);

  color: var(--muted);

  font:
    10px "DM Mono",
    monospace;
}

.status-dot {
  width: 7px;
  height: 7px;

  flex-shrink: 0;

  border-radius: 50%;

  background: var(--success);

  box-shadow:
    0 0 8px rgba(74, 222, 128, 0.5);
}


/* =====================================================
   SECTION HEADING
===================================================== */

.heading {
  display: flex;

  gap: 22px;

  margin-bottom: 50px;
}

.heading > span {
  flex-shrink: 0;

  padding-top: 7px;

  color: var(--muted);

  font:
    13px "DM Mono",
    monospace;
}

.heading h2 {
  margin: 0;

  font-size: clamp(2.2rem, 4vw, 3.6rem);

  line-height: 1.05;

  letter-spacing: -0.05em;
}


/* =====================================================
   ABOUT
===================================================== */

.about p {
  color: var(--muted);

  font-size: 1rem;

  line-height: 1.9;

  margin-bottom: 18px;
}

.about .large {
  color: var(--text);

  font-size: 1.4rem;

  line-height: 1.7;
}


/* =====================================================
   STATS
===================================================== */

.stats {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 1px;

  background: var(--line);

  border: 1px solid var(--line);
}

.stats div {
  padding: 27px;

  background: var(--surface);
}

.stats b {
  display: block;

  margin-bottom: 4px;

  font-size: 2.2rem;
}

.stats span {
  color: var(--muted);

  font-size: 0.8rem;

  line-height: 1.5;
}


/* =====================================================
   CARDS
===================================================== */

.card,
.project {
  height: 100%;

  padding: 27px;

  border: 1px solid var(--line);

  border-radius: 14px;

  background: var(--surface);
}

.card i {
  display: grid;

  place-items: center;

  width: 40px;
  height: 40px;

  margin-bottom: 20px;

  border: 1px solid var(--line);

  border-radius: 9px;

  color: var(--text);

  font-style: normal;

  font-weight: 800;
}

.card h3 {
  margin: 0 0 15px;

  font-size: 1.1rem;
}

.card p,
.card > span {
  color: var(--muted);

  font-size: 0.9rem;

  line-height: 1.75;
}

.card small {
  color: var(--accent);

  font:
    12px "DM Mono",
    monospace;
}

.card > span {
  display: block;

  margin-top: 22px;
}


/* =====================================================
   EXPERIENCE
===================================================== */

.timeline {
  margin-left: 10px;

  border-left: 1px solid var(--line);
}

.job {
  position: relative;

  display: grid;

  grid-template-columns: 160px 1fr;

  gap: 40px;

  padding: 0 0 60px 40px;
}

.dot {
  position: absolute;

  left: -5px;
  top: 7px;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  background: var(--accent);
}

.job time {
  color: var(--muted);

  font:
    12px "DM Mono",
    monospace;
}

.job h3 {
  margin: 0;

  font-size: 1.35rem;
}

.job h4 {
  margin: 6px 0 20px;

  color: var(--accent);

  font-size: 0.95rem;
}

.job ul {
  padding-left: 20px;

  margin: 0;
}

.job li {
  margin: 8px 0;

  color: var(--muted);

  font-size: 0.95rem;

  line-height: 1.8;
}


/* =====================================================
   PROJECTS
===================================================== */

.project {
  min-height: 310px;

  display: flex;

  flex-direction: column;

  background: var(--bg);
}

.project.featured {
  background: var(--text);

  color: var(--bg);
}

.project-top {
  display: flex;

  justify-content: space-between;

  color: var(--muted);

  font:
    12px "DM Mono",
    monospace;
}

.project h3 {
  margin: 65px 0 15px;

  font-size: 1.5rem;
}

.project p {
  margin-bottom: 20px;

  color: var(--muted);

  font-size: 0.95rem;

  line-height: 1.8;
}

.project .tags {
  margin-top: auto;
}


/* =====================================================
   CONTACT
===================================================== */

.contact {
  padding: 120px 5%;

  background: var(--text);

  color: var(--bg);

  text-align: center;
}

.contact > div {
  width: min(100%, 800px);

  margin: auto;
}

.contact h2 {
  margin-bottom: 28px;

  font-size: clamp(3rem, 6vw, 5.7rem);

  line-height: 1;

  letter-spacing: -0.06em;
}

.contact > div > p:not(.eyebrow) {
  margin-bottom: 30px;

  color: #555;

  font-size: 1rem;

  line-height: 1.8;
}

.contact .eyebrow {
  color: var(--accent);
}

.contact .btn.primary {
  background: var(--bg);

  color: var(--text);

  border-color: var(--bg);
}

.contact .btn.primary:hover {
  background: #202126;

  color: white;
}

.links {
  display: flex;

  justify-content: center;

  gap: 28px;

  margin-top: 35px;

  font-size: 0.9rem;
}

.links a:hover {
  color: var(--accent);
}


/* =====================================================
   FOOTER
===================================================== */

footer {
  display: flex;

  justify-content: space-between;

  gap: 15px;

  padding: 25px 3%;

  background: var(--text);

  color: #666;

  border-top: 1px solid #ddd;

  font-size: 0.75rem;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 991px) {
  .section {
    padding: 90px 0;
  }

  .hero {
    min-height: auto;

    padding-top: 80px;
    padding-bottom: 80px;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero h1 {
    font-size: clamp(3rem, 7vw, 4.5rem);
  }

  .hero-text {
    max-width: 700px;
  }

  .hero-visual {
    justify-content: flex-start;

    margin-top: 25px;
  }

  .code-card {
    max-width: 650px;
  }

  .job {
    gap: 30px;
  }
}


/* =====================================================
   MOBILE NAV
===================================================== */

@media (max-width: 767px) {
  .site-navbar {
    height: 68px;
  }

  .navbar-inner {
    width: 90%;
  }

  .menu-btn {
    display: block;
  }

  .site-nav {
    position: absolute;

    top: 68px;
    left: 0;

    width: 100%;

    display: none;

    flex-direction: column;

    align-items: flex-start;

    gap: 0;

    padding: 18px 5%;

    background: var(--surface);

    border-bottom: 1px solid var(--line);
  }

  .site-nav.open {
    display: flex;
  }

  .site-nav a {
    width: 100%;

    padding: 11px 0;

    font-size: 0.95rem;
  }


  /* =====================================================
     HERO MOBILE
  ===================================================== */

  .hero {
    padding-top: 65px;
    padding-bottom: 65px;
  }

  .hero-eyebrow {
    margin-bottom: 18px;

    font-size: 0.7rem;
  }

  .hero h1 {
    max-width: 100%;

    font-size: clamp(
      2.7rem,
      13vw,
      4rem
    );

    line-height: 1.03;
  }

  .hero-text {
    margin-top: 22px;

    font-size: 0.9rem;

    line-height: 1.75;
  }


  /* =====================================================
     HERO META MOBILE
  ===================================================== */

  .hero-meta {
    width: 100%;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    margin: 26px 0;

    border-radius: 10px;
  }

  .hero-meta-item {
    min-width: 0;

    padding: 14px 10px;
  }

  .hero-meta-item strong {
    font-size: 0.8rem;
  }

  .hero-meta-item span {
    font-size: 0.62rem;

    white-space: normal;
  }

  .hero-meta-divider {
    display: none;
  }

  .hero-meta-item:not(:last-child) {
    border-right: 1px solid var(--line);
  }


  /* =====================================================
     HERO BUTTONS MOBILE
  ===================================================== */

  .actions {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    width: 100%;

    gap: 9px;
  }

  .actions .btn {
    width: 100%;

    min-height: 44px;

    padding: 11px 12px;

    font-size: 0.75rem;
  }

  .actions .btn:last-child {
    grid-column: 1 / -1;
  }


  /* =====================================================
     HERO TECHNOLOGIES MOBILE
  ===================================================== */

  .hero-technologies {
    margin-top: 28px;
  }

  .tags {
    gap: 7px;
  }

  .tags span {
    padding: 7px 9px;

    font-size: 0.65rem;
  }


  /* =====================================================
     CODE CARD MOBILE
  ===================================================== */

  .hero-visual {
    margin-top: 35px;
  }

  .code-card {
    max-width: 100%;

    border-radius: 13px;
  }

  .bar {
    padding: 12px 14px;

    font-size: 10px;
  }

  .code-card pre {
    padding: 20px 18px;

    font-size: 10px;

    line-height: 1.75;
  }

  .availability {
    margin: 0 14px 14px;

    padding: 9px 11px;

    font-size: 9px;
  }


  /* =====================================================
     SECTION
  ===================================================== */

  .section {
    padding: 75px 0;
  }

  .portfolio-container {
    width: 90%;
  }


  /* =====================================================
     HEADING
  ===================================================== */

  .heading {
    gap: 12px;

    margin-bottom: 35px;
  }

  .heading h2 {
    font-size: 2.2rem;
  }


  /* =====================================================
     ABOUT
  ===================================================== */

  .about .large {
    font-size: 1.2rem;
  }


  /* =====================================================
     STATS
  ===================================================== */

  .stats div {
    padding: 20px;
  }

  .stats b {
    font-size: 1.8rem;
  }


  /* =====================================================
     EXPERIENCE
  ===================================================== */

  .timeline {
    margin-left: 6px;
  }

  .job {
    grid-template-columns: 1fr;

    gap: 8px;

    padding-left: 25px;
  }

  .job h3 {
    font-size: 1.2rem;
  }

  .job li {
    font-size: 0.9rem;

    line-height: 1.7;
  }


  /* =====================================================
     PROJECT
  ===================================================== */

  .project {
    min-height: 280px;
  }


  /* =====================================================
     CONTACT
  ===================================================== */

  .contact {
    padding: 90px 5%;
  }

  .contact h2 {
    font-size: clamp(
      2.8rem,
      13vw,
      4.5rem
    );
  }


  /* =====================================================
     FOOTER
  ===================================================== */

  footer {
    flex-direction: column;

    padding: 25px 5%;
  }
}


/* =====================================================
   VERY SMALL MOBILE
===================================================== */

@media (max-width: 400px) {
  .hero {
    padding-top: 55px;
    padding-bottom: 55px;
  }

  .hero h1 {
    font-size: 2.55rem;
  }

  .hero-text {
    font-size: 0.85rem;
  }


  /* META */

  .hero-meta-item {
    padding: 13px 7px;
  }

  .hero-meta-item strong {
    font-size: 0.72rem;
  }

  .hero-meta-item span {
    font-size: 0.58rem;
  }


  /* BUTTONS */

  .actions {
    grid-template-columns: 1fr;
  }

  .actions .btn:last-child {
    grid-column: auto;
  }


  /* STATS */

  .stats b {
    font-size: 1.6rem;
  }

  .stats span {
    font-size: 0.7rem;
  }


  /* CODE */

  .code-card pre {
    padding: 18px 14px;

    font-size: 9px;

    line-height: 1.7;
  }

  .availability {
    font-size: 8px;
  }
}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;

    animation-duration: 0.01ms !important;

    animation-iteration-count: 1 !important;
  }
}