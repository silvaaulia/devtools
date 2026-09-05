<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>URL Decoder - Decode URLs Online</title>
<meta name="description" content="Decode URL encoded text online quickly with this free URL decoder.">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="URL Decoder - Decode URLs Online">
<meta property="og:description" content="Decode URL encoded text online quickly with this free URL decoder.">
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
<a href="/url-decoder">Url Decoder</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">

<section class="tool-page">
<div class="container">

<h1>URL Decoder</h1>

<p class="tool-description">
Decode URL encoded text directly in your browser.
</p>

<div class="tool-wrapper">

<div class="tool-card-panel">

<div class="tool-card-panel-header">
<strong>Encoded URL</strong>
</div>

<textarea class="tool-textarea" id="input" placeholder="Hello%20Silva%21"></textarea>

</div>

<div class="tool-actions">

<button id="convertButton" class="tool-btn tool-btn-primary">
Decode URL
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
<nav class="tool-navigation"><div class="nav-prev"><a href="/url-encoder" class="nav-link">← URL Encoder</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/html-escape" class="nav-link">HTML Escape →</a></div></nav>


<footer class="footer">
<div class="container">
<p>&copy; 2026 DevTools. All rights reserved.</p>
</div>
</footer>

<script src="/public/assets/js/url-decoder.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>