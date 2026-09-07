<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>SQL Formatter</title><link rel="stylesheet" href="/public/assets/css/style.css"></head>
<body>
<header class="header">
<a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</span>DevTools</a>
<nav class="nav">
<a href="/">All</a>
<a href="/json-formatter">JSON</a>
<a href="/sql-formatter" class="active">SQL</a>
<a href="/regex-tester">Regex</a>
</nav>
</header>
<main class="main">
<h1>SQL Formatter</h1>
<div class="editor">
<div class="panel">
<div class="panel-header">SQL Input <button id="clearBtn" class="btn-icon">×</button></div>
<textarea id="sqlInput" placeholder="SELECT * FROM users WHERE id=1"></textarea>
</div>
<div class="panel">
<div class="panel-header">Output <button id="copyBtn" class="btn-icon">⎘</button></div>
<pre id="outputCode"></pre>
</div></div>
<div class="actions">
<button id="fmtBtn" class="btn-primary">Format</button>
</div>
<div id="message"></div>
</main>
<footer>© 2024 DevTools</footer>
<script src="/public/assets/js/sql-formatter.js"></script>
</body></html>
