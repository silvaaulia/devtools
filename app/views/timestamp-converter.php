<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Timestamp Converter - Unix Timestamp Online</title>

<meta name="description" content="Convert Unix timestamps to dates and dates to Unix timestamps with this free online tool.">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="Timestamp Converter - Unix Timestamp Online">
<meta property="og:description" content="Convert Unix timestamps to dates and dates to Unix timestamps with this free online tool.">
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
<a href="/timestamp-converter">Timestamp Converter</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">

<section class="tool-page">

<div class="container">

<h1>Timestamp Converter</h1>

<p class="tool-description">
Convert Unix timestamps and dates quickly in your browser.
</p>

<div class="tool-wrapper">

<div class="tool-card-panel">

<div class="tool-card-panel-header">
<strong>Unix Timestamp</strong>
</div>

<input
type="text"
id="timestampInput"
placeholder="Example: 1788508800"
>

</div>

<div class="tool-actions">

<button
id="timestampToDate"
class="tool-btn tool-btn-primary">
Timestamp → Date
</button>

</div>

<div class="tool-card-panel">

<div class="tool-card-panel-header">
<strong>Date / Time</strong>
</div>

<input
type="datetime-local"
id="dateInput"
>

</div>

<div class="tool-actions">

<button
id="dateToTimestamp"
class="tool-btn tool-btn-primary">
Date → Timestamp
</button>

<button
id="nowButton"
class="tool-btn tool-btn-secondary">
Current Time
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

<button
id="copyButton"
class="tool-btn tool-btn-small">
Copy
</button>

</div>

<textarea
class="tool-textarea" id="output"
readonly
placeholder="Result will appear here..."
></textarea>

</div>

</div>

</div>

</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"><a href="/regex-tester" class="nav-link">← Regex Tester</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"></div></nav>


<footer class="footer">

<div class="container">

<p>&copy; 2026 DevTools. All rights reserved.</p>

</div>

</footer>

<script src="/public/assets/js/timestamp-converter.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>

</html>