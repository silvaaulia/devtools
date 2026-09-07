<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Base64 Encoder - Encode Text to Base64 Online</title>
<meta name="description" content="Encode text to Base64 format online.">
<meta name="robots" content="index, follow">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/public/assets/css/style.css">
</head>
<body>
<div class="bg-decoration"><div class="bg-orb bg-orb-1"></div><div class="bg-orb bg-orb-2"></div></div>
<header class="header">
<div class="container header-inner">
<a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</span>DevTools</a>
<div class="header-nav">
<button class="nav-link" onclick="location.href='/'">All Tools</button>
<button class="nav-link" onclick="location.href='/base64-encoder'">Base64</button>
<button class="nav-link" onclick="location.href='/url-encoder'">URL</button>
<button class="nav-link" onclick="location.href='/sql-formatter'">SQL</button>
<button class="nav-link" onclick="location.href='/regex-tester'">Regex</button>
</div>
<div class="header-actions">
<button class="icon-btn" id="themeToggle" title="Toggle theme">&#9790;</button>
<button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
</div>
</div>
<nav class="mobile-nav" id="mobileNav">
<button class="nav-link" onclick="location.href='/'">All Tools</button>
<button class="nav-link" onclick="location.href='/base64-encoder'">Base64</button>
<button class="nav-link" onclick="location.href='/url-encoder'">URL</button>
<button class="nav-link" onclick="location.href='/sql-formatter'">SQL</button>
<button class="nav-link" onclick="location.href='/regex-tester'">Regex</button>
</nav>
</header>
<main class="tool-page">
<div class="container">
<div class="tool-header">
<div class="tool-breadcrumb"><a href="/">&larr; All Tools</a> / Encoders</div>
<h1 class="tool-title">Base64 Encoder</h1>
<p class="tool-desc">Encode text to Base64 format online.</p>
</div>
<div class="editor-container">
<div class="editor-panel">
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot"></span>Text Input</span>
<div class="editor-actions">
<button class="btn btn-ghost btn-sm" id="clearBtn" data-tooltip="Clear">&#10005;</button>
</div>
</div>
<textarea class="editor-textarea" id="textInput" placeholder="Enter text to encode..."></textarea>
<div class="editor-header"><span class="kbd-hint"><span class="kbd">Ctrl</span>+<span class="kbd">Enter</span></span></div>
</div>
<div class="editor-panel">
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot output"></span>Base64 Output</span>
<div class="editor-actions">
<button class="btn btn-ghost btn-sm" id="copyBtn" data-tooltip="Copy">&#128203;</button>
</div>
</div>
<pre><code id="outputCode"><!-- Base64 output will appear here --></code></pre>
</div>
</div>
<div class="action-bar">
<button class="btn btn-primary" id="encodeBtn">&#128274; Encode to Base64</button>
<button class="btn btn-secondary" id="decodeBtn">&#128275; Decode from Base64</button>
<button class="btn btn-secondary" id="clearAllBtn">&#128465; Clear</button>
</div>
<div id="messageArea"></div>
</div>
</main>
<footer class="footer"><div class="container"><p class="footer-text">&copy; 2024 DevTools. All tools run locally in your browser.</p></div></footer>
<script src="/public/assets/js/base64-encoder.js"></script>
<script src="/public/assets/js/theme.js"></script>
<script>document.getElementById('hamburger')?.addEventListener('click', function(){this.classList.toggle('active');document.getElementById('mobileNav')?.classList.toggle('active');});</script>
</body>
</html>
