<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Regex Tester - Test Regular Expressions Online</title>

<meta name="description" content="Test regular expressions online with matches, indexes, flags and error detection.">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="Regex Tester - Test Regular Expressions Online">
<meta property="og:description" content="Test regular expressions online with matches, indexes, flags and error detection.">
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
<a href="/regex-tester">Regex Tester</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">

<section class="tool-page">

<div class="container">

<h1>Regex Tester</h1>

<p class="tool-description">
Test and debug regular expressions directly in your browser.
</p>

<div class="tool-wrapper">

<div class="tool-card-panel">

<div class="tool-card-panel-header">
<strong>Regular Expression</strong>
</div>

<input
type="text"
id="regexInput"
placeholder="Example: ^[A-Za-z]+$"
>

</div>

<div class="tool-card-panel">

<div class="tool-card-panel-header">
<strong>Flags</strong>
</div>

<input
type="text"
id="flagsInput"
placeholder="gim"
value="g"
>

</div>

<div class="tool-card-panel">

<div class="tool-card-panel-header">
<strong>Test Text</strong>
</div>

<textarea
class="tool-textarea" id="textInput"
placeholder="Enter text to test..."
></textarea>

</div>

<div class="tool-actions">

<button
id="testButton"
class="tool-btn tool-btn-primary">
Test Regex
</button>

<button
id="clearButton"
class="tool-btn tool-btn-secondary">
Clear
</button>

</div>

<div
id="errorMessage"
class="tool-error">
</div>

<div class="tool-card-panel">

<div class="tool-card-panel-header">
<strong>Result</strong>
</div>

<div id="result">

<p>No test performed.</p>

</div>

</div>

</div>

</div>

</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"><a href="/xml-escape" class="nav-link">← XML Escape</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/timestamp-converter" class="nav-link">Timestamp Converter →</a></div></nav>


<footer class="footer">

<div class="container">

<p>&copy; 2026 DevTools. All rights reserved.</p>

</div>

</footer>

<script src="/public/assets/js/regex-tester.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>

</html>