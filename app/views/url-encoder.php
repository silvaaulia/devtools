<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>URL Encoder - Encode URLs Online</title>
<meta name="description" content="Encode URL components online safely with this free URL encoder.">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="URL Encoder - Encode URLs Online">
<meta property="og:description" content="Encode URL components online safely with this free URL encoder.">
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
<a href="/url-encoder">Url Encoder</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">

<section class="tool-page">
<div class="container">

<h1>URL Encoder</h1>

<p class="tool-description">
Encode text for safe use inside URLs.
</p>

<div class="tool-wrapper">

<div class="tool-card-panel">

<div class="tool-card-panel-header">
<strong>Input</strong>
</div>

<textarea class="tool-textarea" id="input" placeholder="https://example.com/hello world"></textarea>

</div>

<div class="tool-actions">

<button id="convertButton" class="tool-btn tool-btn-primary">
Encode URL
</button>

<button id="clearButton" class="tool-btn tool-btn-secondary">
Clear
</button>

</div>

<div id="errorMessage" class="tool-error"></div>

<div class="tool-card-panel">

<div class="tool-card-panel-header">

<strong>Encoded Result</strong>

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
<nav class="tool-navigation"><div class="nav-prev"><a href="/base64-decoder" class="nav-link">← Base64 Decoder</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/url-decoder" class="nav-link">URL Decoder →</a></div></nav>


<footer class="footer">
<div class="container">
<p>&copy; 2026 DevTools. All rights reserved.</p>
</div>
</footer>

<script src="/public/assets/js/url-encoder.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>