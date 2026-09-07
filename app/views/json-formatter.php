<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JSON Formatter</title>
<link rel="stylesheet" href="/public/assets/css/style.css">
</head>
<body>
<header class="header">
<a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</span>DevTools</a>
<nav class="nav">
<a href="/">All Tools</a>
<a href="/json-formatter" class="active">JSON</a>
<a href="/xml-formatter">XML</a>
<a href="/sql-formatter">SQL</a>
<a href="/regex-tester">Regex</a>
</nav>
</header>
<main class="main">
<h1>JSON Formatter</h1>
<div class="editor">
<div class="panel">
<div class="panel-header">JSON Input <button id="clearBtn" class="btn-icon" title="Clear">×</button></div>
<textarea id="jsonInput" placeholder='{"name": "John"}'></textarea>
</div>
<div class="panel">
<div class="panel-header">Output <button id="copyBtn" class="btn-icon" title="Copy">⎘</button></div>
<pre id="outputCode"></pre>
</div>
</div>
<div class="actions">
<button id="formatBtn" class="btn-primary">Format</button>
<button id="minifyBtn" class="btn-secondary">Minify</button>
</div>
<div id="message"></div>
</main>
<footer>© 2024 DevTools</footer>
<script src="/public/assets/js/json-formatter.js"></script>
</body>
</html>
