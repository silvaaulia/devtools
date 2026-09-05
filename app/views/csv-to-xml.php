<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>CSV to XML Converter - Convert CSV Online</title>

<meta name="description" content="Convert CSV files and data to XML online with this free CSV to XML converter.">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="CSV to XML Converter - Convert CSV Online">
<meta property="og:description" content="Convert CSV files and data to XML online with this free CSV to XML converter.">
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
<a href="/csv-to-xml">Csv To Xml</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">

<section class="tool-page">
<div class="container">

<h1>CSV to XML Converter</h1>

<p class="tool-description">
Convert CSV data into XML format directly in your browser.
</p>

<div class="tool-wrapper">

<div class="tool-card-panel">

<div class="tool-card-panel-header">
<strong>Input CSV</strong>
</div>

<textarea class="tool-textarea" id="input" placeholder="name,age
Silva,22
Andi,25"></textarea>

</div>

<div class="tool-actions">

<button id="convertButton" class="tool-btn tool-btn-primary">
Convert to XML
</button>

<button id="clearButton" class="tool-btn tool-btn-secondary">
Clear
</button>

</div>

<div id="errorMessage" class="tool-error"></div>

<div class="tool-card-panel">

<div class="tool-card-panel-header">

<strong>XML Result</strong>

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
<nav class="tool-navigation"><div class="nav-prev"><a href="/csv-to-json" class="nav-link">← CSV to JSON</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/yaml-to-json" class="nav-link">YAML to JSON →</a></div></nav>


<footer class="footer">
<div class="container">
<p>&copy; 2026 DevTools. All rights reserved.</p>
</div>
</footer>

<script src="/public/assets/js/csv-to-xml.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>