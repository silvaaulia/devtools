<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JSON to YAML Converter - Convert JSON Online</title>
<meta name="description" content="Convert JSON data to YAML online with this free browser-based converter.">
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
<button class="hamburger" id="hamburger" aria-label="Menu"><span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span></button><nav class="nav-categories" id="nav-categories">
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
<div class="tool-breadcrumb"><a href="/">&larr; All Tools</a> / Converters</div>
<h1 class="tool-title">JSON to YAML Converter</h1>
<p class="tool-desc">Convert JSON data into YAML directly in your browser.</p>
</div>

<div class="editor-container">

<div class="editor-panel">
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot input"></span>JSON Input</span>
<div class="editor-actions">
<label class="btn btn-ghost btn-sm" title="Upload file">&#128194;<input type="file" accept=".json" id="fileInput" style="display:none"></label>
<button class="btn btn-ghost btn-sm" id="clearBtn" title="Clear">&#10005;</button>
</div>
</div>
<textarea class="editor-textarea" id="jsonInput" placeholder='{"name": "Silva", "age": 22, "active": true}'></textarea>
</div>

<div class="editor-panel">
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot"></span>YAML Output</span>
<div class="editor-actions">
<button class="btn btn-ghost btn-sm" id="copyBtn" title="Copy">&#128203;</button>
<button class="btn btn-ghost btn-sm" id="downloadBtn" title="Download">&#128229;</button>
</div>
</div>
<pre><code id="outputCode"><!-- YAML output will appear here --></code></pre>
</div>

</div>

<div class="action-bar">
<button class="btn btn-primary" id="formatBtn">&#8644; Convert to YAML</button>
</div>

<div id="messageArea"></div>
</div>
</main>

<footer class="footer"><div class="container"><p class="footer-text">&copy; 2024 DevTools. All tools run locally in your browser.</p></div></footer>

<script src="https://cdn.jsdelivr.net/npm/js-yaml@4/dist/js-yaml.min.js"></script>
<script src="/public/assets/js/json-to-yaml.js"></script>
<script src="/public/assets/js/theme.js"></script>
<script>document.getElementById("hamburger")?.addEventListener("click",()=>{document.getElementById("nav-categories")?.classList.toggle("active");document.getElementById("hamburger")?.classList.toggle("active")});</script>
</body>
</html>
