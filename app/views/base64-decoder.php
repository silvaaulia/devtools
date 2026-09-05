<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Base64 Decoder - Decode Base64 Online</title>
<meta name="description" content="Decode Base64 text online quickly with this free and easy-to-use Base64 decoder.">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="Base64 Decoder - Decode Base64 Online">
<meta property="og:description" content="Decode Base64 text online quickly with this free and easy-to-use Base64 decoder.">
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
<a href="/base64-decoder">Base64 Decoder</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">
<section class="tool-page">
<div class="container">

<h1>Base64 Decoder</h1>

<p class="tool-description">
Decode Base64 data directly in your browser.
</p>

<div class="tool-wrapper">

<div class="tool-card-panel">
<div class="tool-card-panel-header">
<strong>Base64 Input</strong>
</div>

<textarea class="tool-textarea" id="input" placeholder="SGVsbG8gU2lsdmEh"></textarea>
</div>

<div class="tool-actions">

<button id="convertButton" class="tool-btn tool-btn-primary">
Decode Base64
</button>

<button id="clearButton" class="tool-btn tool-btn-secondary">
Clear
</button>

</div>

<div id="errorMessage" class="tool-error"></div>

<div class="tool-card-panel">

<div class="tool-card-panel-header">
<strong>Decoded Result</strong>

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
<nav class="tool-navigation"><div class="nav-prev"><a href="/base64-encoder" class="nav-link">← Base64 Encoder</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/url-encoder" class="nav-link">URL Encoder →</a></div></nav>


<footer class="footer">
<div class="container">
<p>&copy; 2026 DevTools. All rights reserved.</p>
</div>
</footer>

<script src="/public/assets/js/base64-decoder.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>