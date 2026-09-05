<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SQL Formatter - Beautify SQL Online | DevTools</title>
<meta name="description" content="Format and beautify SQL queries online with a fast, free browser-based SQL formatter.">
<meta name="robots" content="index, follow">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="SQL Formatter - Beautify SQL Online | DevTools">
<meta property="og:description" content="Format and beautify SQL queries online with a fast, free browser-based SQL formatter.">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary">

<link rel="stylesheet" href="/public/assets/css/style.css">
</head>
<body>

<header class="site-header">
<div class="container navbar">
<a href="/" class="logo">DevTools</a>
<nav class="main-nav">
<a href="/">Home</a>
<a href="/#tools">Tools</a>
<a href="/#converters">Converters</a>
<a href="/sql-formatter">SQL Formatter</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">
<div class="container">

<h1>SQL Formatter</h1>

<p class="tool-description">
Format and beautify SQL queries directly in your browser.
</p>

<div class="tool-wrapper">

<div class="tool-card-panel">
<div class="tool-card-panel-header">
<strong>SQL Input</strong>
</div>
<textarea class="tool-textarea" id="sqlInput" placeholder="SELECT id, name, email FROM users WHERE active = 1;"></textarea>
</div>

<div class="tool-actions">
<button id="formatButton" class="tool-btn tool-btn-primary">Format SQL</button>
<button id="clearButton" class="tool-btn tool-btn-secondary">Clear</button>
</div>

<div id="errorMessage" class="tool-error"></div>

<div class="tool-card-panel">
<div class="tool-card-panel-header">
<strong>Result</strong>
<button id="copyButton" class="tool-btn tool-btn-small">Copy</button>
</div>
<textarea class="tool-textarea" id="sqlOutput" readonly placeholder="Formatted SQL will appear here..."></textarea>
</div>

</div>

<section class="tool-help">

<h2>What is SQL Formatter?</h2>
<p>
SQL Formatter beautifies SQL queries by adding proper indentation and line breaks,
making complex queries easier to read and debug.
</p>

<h2>Features</h2>
<ul>
<li>Format SQL queries</li>
<li>Copy formatted result</li>
<li>Browser-based processing</li>
<li>No data uploaded to server</li>
</ul>

</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"><a href="/javascript-minifier" class="nav-link">← JavaScript Minifier</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/json-to-xml" class="nav-link">JSON to XML →</a></div></nav>


<footer class="site-footer">
<div class="container footer-content">
<div>
<strong>DevTools</strong>
<p>Free online tools for developers.</p>
</div>
<div class="footer-links">
<a href="/">Home</a>
<a href="/#tools">Tools</a>
<a href="/#converters">Converters</a>
<a href="/about">About</a>
<a href="/privacy-policy">Privacy</a>
<a href="/terms">Terms</a>
</div>
</div>
<div class="container copyright">
<p>&copy; 2026 DevTools. All rights reserved.</p>
</div>
</footer>

<script src="/public/assets/js/sql-formatter.js"></script>
<script src="/public/assets/js/theme.js"></script>

<script src="/public/assets/js/download.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
</body>
</html>