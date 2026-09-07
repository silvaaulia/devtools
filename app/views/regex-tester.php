<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Regex Tester - Free Online Tool</title>
<meta name="description" content="Test regular expressions online. See matches, groups, and replacements.">
<meta name="robots" content="index, follow">
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
<button class="nav-link active" onclick="location.href='/regex-tester'">Regex</button>
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
<button class="nav-link active" onclick="location.href='/regex-tester'">Regex</button>
</nav>
</header>

<main class="tool-page">
<div class="container">
<div class="tool-header">
<h1 class="tool-title">Regex Tester</h1>
<p class="tool-desc">Test your regular expressions</p>
</div>

<div class="regex-container">
<div class="regex-inputs">
<label class="regex-label">Pattern</label>
<div class="regex-pattern-row">
<input type="text" class="regex-input" id="regexInput" placeholder="^\w+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$">
<div class="regex-flags">
<span class="flag"><input type="checkbox" id="flagG" checked> g</span>
<span class="flag"><input type="checkbox" id="flagI"> i</span>
<span class="flag"><input type="checkbox" id="flagM"> m</span>
<span class="flag"><input type="checkbox" id="flagS"> s</span>
</div>
</div>

<label class="regex-label">Test String</label>
<textarea class="regex-textarea" id="textInput" placeholder="test@example.com&#10;admin@site.org&#10;hello@world.net"></textarea>
</div>

<div class="regex-output">
<label class="regex-label">Matches <span id="matchCount"></span></label>
<pre class="regex-result" id="outputCode">Matches will appear here</pre>
<div class="regex-actions">
<button class="btn-action" id="copyBtn">&#128203; Copy</button>
</div>
</div>
</div>

<div class="regex-message" id="messageArea"></div>
</div>
</main>

<footer class="footer"><div class="container"><p class="footer-text">&copy; 2024 DevTools. All tools run locally.</p></div>

<script src="/public/assets/js/regex-tester.js"></script>
<script src="/public/assets/js/theme.js"></script>
<script>document.getElementById('hamburger')?.addEventListener('click',function(){this.classList.toggle('active');document.getElementById('mobileNav')?.classList.toggle('active');});</script>
</body>
</html>
