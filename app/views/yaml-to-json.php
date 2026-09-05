<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>YAML to JSON Converter - Convert YAML Online</title>

<meta name="description" content="Convert YAML data to JSON online quickly with this free YAML to JSON converter.">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="YAML to JSON Converter - Convert YAML Online">
<meta property="og:description" content="Convert YAML data to JSON online quickly with this free YAML to JSON converter.">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary">

<link rel="stylesheet" href="/public/assets/css/style.css">

<meta name="robots" content="index, follow">
</head>

<body>

<header class="site-header">
<div class="container navbar">
<a href="/" class="logo">DevTools</a>
<nav class="main-nav">
<a href="/">Home</a>
<a href="/#tools">Tools</a>
<a href="/#converters">Converters</a>
<a href="/yaml-to-json">Yaml To Json</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">

<section class="tool-page">
<div class="container">

<h1>YAML to JSON Converter</h1>

<p class="tool-description">
Convert YAML data into JSON directly in your browser.
</p>

<div class="tool-wrapper">

<div class="tool-card-panel">

<div class="tool-card-panel-header">
<strong>Input YAML</strong>
</div>

<textarea class="tool-textarea" id="input" placeholder="name: Silva
age: 22
active: true"></textarea>

</div>

<div class="tool-actions">

<button id="convertButton" class="tool-btn tool-btn-primary">
Convert to JSON
</button>

<button id="clearButton" class="tool-btn tool-btn-secondary">
Clear
</button>

</div>

<div id="errorMessage" class="tool-error"></div>

<div class="tool-card-panel">

<div class="tool-card-panel-header">

<strong>JSON Result</strong>

<button id="copyButton" class="tool-btn tool-btn-small">
Copy
</button>

</div>

<textarea class="tool-textarea" id="output" readonly></textarea>

</div>

</div>

</div>
</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"><a href="/csv-to-xml" class="nav-link">← CSV to XML</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/json-to-yaml" class="nav-link">JSON to YAML →</a></div></nav>


<footer class="footer">
<div class="container">
<p>&copy; 2026 DevTools. All rights reserved.</p>
</div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/js-yaml@4/dist/js-yaml.min.js"></script>
<script src="/public/assets/js/yaml-to-json.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>