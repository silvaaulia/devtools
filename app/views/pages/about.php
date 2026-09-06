<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About DevTools</title>
<meta name="description" content="Learn more about DevTools, a collection of fast and privacy-friendly online developer tools.">
<meta name="robots" content="index, follow">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/public/assets/css/style.css">
</head>
<body>

<header class="header">
<div class="container header-inner">
<a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</span>DevTools</a>
<nav class="nav-categories">
<button class="nav-link" onclick="location.href='/'">All Tools</button>
<button class="nav-link" onclick="location.href='/json-formatter'">JSON</button>
<button class="nav-link" onclick="location.href='/xml-formatter'">XML</button>
<button class="nav-link" onclick="location.href='/sql-formatter'">SQL</button>
<button class="nav-link" onclick="location.href='/regex-tester'">Regex</button>
</nav>
<div class="header-actions">
<button class="icon-btn" id="themeToggle" title="Toggle theme"><span id="themeIcon">&#9790;</span></button>
</div>
</div>
</header>

<main class="tool-page">
<div class="container">

<div class="tool-header">
<div class="tool-breadcrumb"><a href="/">&larr; Back to Home</a></div>
<h1 class="tool-title">About DevTools</h1>
<p class="tool-desc">DevTools provides simple, fast and accessible online utilities for developers, students, designers and anyone working with digital data.</p>
</div>

<div class="editor-container" style="max-width: 800px;">
<div class="editor-panel" style="width: 100%;">

<h2 style="margin-top: 0;">Our Mission</h2>
<p>Our goal is to make common developer tasks easier by providing practical browser-based tools for formatting, validation, conversion, encoding, decoding, testing and minification.</p>

<h2>Privacy First</h2>
<p>Whenever possible, tools process data directly inside your browser. This helps reduce unnecessary server processing and keeps sensitive development data on your device.</p>

<h2>Simple and Accessible</h2>
<p>DevTools is designed to be easy to use without unnecessary complexity. The tools are responsive and available across desktop, tablet and mobile devices.</p>

</div>
</div>

</div>
</main>

<footer class="footer"><div class="container"><p class="footer-text">&copy; 2024 DevTools. All tools run locally in your browser.</p></div></footer>

<script src="/public/assets/js/theme.js"></script>
</body>
</html>
