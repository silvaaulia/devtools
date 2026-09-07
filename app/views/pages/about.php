<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About - DevTools</title>
<meta name="description" content="Free online developer tools for formatting, validating, converting, encoding, and testing code.">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/public/assets/css/style.css">
</head>
<body>

<header class="header">
<div class="container header-inner">
<a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</span>DevTools</a>
<div class="header-nav">
<button class="nav-link" onclick="location.href='/'">All Tools</button>
<button class="nav-link" onclick="location.href='/json-formatter'">JSON</button>
<button class="nav-link" onclick="location.href='/xml-formatter'">XML</button>
<button class="nav-link" onclick="location.href='/sql-formatter'">SQL</button>
<button class="nav-link" onclick="location.href='/regex-tester'">Regex</button>
</div>
<div class="header-actions">
<button class="icon-btn" id="themeToggle">&#9790;</button>
<button class="hamburger" id="hamburger"><span></span><span></span><span></span></button>
</div>
</div>
<nav class="mobile-nav" id="mobileNav">
<button class="nav-link" onclick="location.href='/'">All Tools</button>
<button class="nav-link" onclick="location.href='/json-formatter'">JSON</button>
<button class="nav-link" onclick="location.href='/xml-formatter'">XML</button>
<button class="nav-link" onclick="location.href='/sql-formatter'">SQL</button>
<button class="nav-link" onclick="location.href='/regex-tester'">Regex</button>
</nav>
</header>

<main class="tool-page">
<div class="container">

<div class="about-hero">
<h1 class="about-title">About DevTools</h1>
<p class="about-subtitle">Free online developer tools for everyone</p>
</div>

<div class="about-content">
<div class="about-card">
<h2>Front-end Development</h2>
<p>Building fast, responsive, and user-friendly web interfaces.</p>
</div>

<div class="about-card">
<h2>UI/UX Design</h2>
<p>Creating intuitive and beautiful user experiences.</p>
</div>

<div class="about-card">
<h2>Web Design</h2>
<p>Modern, clean, and accessible web designs.</p>
</div>
</div>

<div class="about-features">
<div class="about-feature">
<span class="about-icon">🔒</span>
<div>
<h3>Privacy First</h3>
<p>All tools run locally in your browser. Your data never leaves your device.</p>
</div>
</div>

<div class="about-feature">
<span class="about-icon">⚡</span>
<div>
<h3>Fast & Free</h3>
<p>No signup required. Start using immediately.</p>
</div>
</div>

<div class="about-feature">
<span class="about-icon">📱</span>
<div>
<h3>Responsive</h3>
<p>Works on desktop, tablet, and mobile devices.</p>
</div>
</div>
</div>

</div>
</main>

<footer class="footer"><div class="container"><p class="footer-text">&copy; 2024 DevTools. All tools run locally in your browser.</p></div>

<script src="/public/assets/js/theme.js"></script>
<script>document.getElementById('hamburger')?.addEventListener('click', function(){this.classList.toggle('active');document.getElementById('mobileNav')?.classList.toggle('active');});</script>
</body>
</html>
