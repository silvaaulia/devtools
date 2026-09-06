<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YAML to JSON Converter - Convert YAML Online</title>
<meta name="description" content="Convert YAML data to JSON online quickly with this free YAML to JSON converter.">
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
<div class="tool-breadcrumb"><a href="/">&larr; All Tools</a> / Converters</div>
<h1 class="tool-title">YAML to JSON Converter</h1>
<p class="tool-desc">Convert YAML data into JSON directly in your browser.</p>
</div>

<div class="editor-container">

<div class="editor-panel">
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot input"></span>YAML Input</span>
<div class="editor-actions">
<label class="btn btn-ghost btn-sm" title="Upload file">&#128194;<input type="file" accept=".yaml,.yml" id="fileInput" style="display:none"></label>
<button class="btn btn-ghost btn-sm" id="clearBtn" title="Clear">&#10005;</button>
</div>
</div>
<textarea class="editor-textarea" id="yamlInput" placeholder="name: Silva&#10;age: 22&#10;active: true"></textarea>
</div>

<div class="editor-panel">
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot"></span>JSON Output</span>
<div class="editor-actions">
<button class="btn btn-ghost btn-sm" id="copyBtn" title="Copy">&#128203;</button>
<button class="btn btn-ghost btn-sm" id="downloadBtn" title="Download">&#128229;</button>
</div>
</div>
<pre><code class="language-json" id="outputCode"><span class="token comment">&lt;!-- JSON output will appear here --&gt;</span></code></pre>
</div>

</div>

<div class="action-bar">
<button class="btn btn-primary" id="formatBtn">&#8644; Convert to JSON</button>
</div>

<div id="messageArea"></div>
</div>
</main>

<footer class="footer"><div class="container"><p class="footer-text">&copy; 2024 DevTools. All tools run locally in your browser.</p></div></footer>

<script src="https://cdn.jsdelivr.net/npm/js-yaml@4/dist/js-yaml.min.js"></script>
<script src="/public/assets/js/yaml-to-json.js"></script>
<script src="/public/assets/js/theme.js"></script>
</body>
</html>
