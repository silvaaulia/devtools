<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>XML Escape & Unescape - Online XML Tool</title>
<meta name="description" content="Escape and unescape XML entities online with this free browser-based XML utility.">
<meta name="robots" content="index, follow">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/public/assets/css/style.css">
</head>
<body>

<div class="bg-decoration">
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
</div>

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
<button class="icon-btn" id="themeToggle" title="Toggle theme">&#9790;</button>
<button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
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

<div class="tool-header">
<div class="tool-breadcrumb"><a href="/">&larr; All Tools</a> / Encoders</div>
<h1 class="tool-title">XML Escape / Unescape</h1>
<p class="tool-desc">Escape or unescape XML special characters directly in your browser.</p>
</div>

<div class="editor-container">

<div class="editor-panel">
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot"></span>XML Input</span>
<div class="editor-actions">
<label class="btn btn-ghost btn-sm" data-tooltip="Upload file">&#128194;<input type="file" id="fileInput" accept=".txt,.xml,.html,.md" style="display:none"></label>
<button class="btn btn-ghost btn-sm" id="sampleBtn" data-tooltip="Load sample">&#127916;</button>
<button class="btn btn-ghost btn-sm" id="clearBtn" data-tooltip="Clear">&#10005;</button>
</div>
</div>
<textarea class="editor-textarea" id="xmlInput" placeholder="<name>Silva & Aulia</name>"></textarea>

<div class="drop-zone" id="dropZone">
<div class="drop-zone-icon">&#128194;</div>
<div class="drop-zone-text">Drop a file here or <strong>click to upload</strong></div>
</div>

<div class="editor-header">
<span class="kbd-hint"><span class="kbd">Ctrl</span>+<span class="kbd">Enter</span></span>
</div>
</div>

<div class="editor-panel">
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot output"></span>Output</span>
<div class="editor-actions">
<button class="btn btn-ghost btn-sm" id="copyBtn" data-tooltip="Copy">&#128203;</button>
<button class="btn btn-ghost btn-sm" id="downloadBtn" data-tooltip="Download">&#128229;</button>
</div>
</div>
<pre><code id="outputCode"><!-- Escaped XML will appear here --></code></pre>
</div>

</div>

<div class="action-bar">
<button class="btn btn-primary" id="escapeBtn">&#128274; Escape XML</button>
<button class="btn btn-secondary" id="unescapeBtn">&#128275; Unescape</button>
<button class="btn btn-secondary" id="clearAllBtn">&#128465; Clear All</button>
</div>

<div id="messageArea"></div>
</div>
</main>

<footer class="footer"><div class="container"><p class="footer-text">&copy; 2024 DevTools. All tools run locally in your browser.</p></div></footer>

<script src="/public/assets/js/xml-escape.js"></script>
<script src="/public/assets/js/theme.js"></script>
<script>document.getElementById('hamburger')?.addEventListener('click', function(){this.classList.toggle('active');document.getElementById('mobileNav')?.classList.toggle('active');});</script>
</body>
</html>
