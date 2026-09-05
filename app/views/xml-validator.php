<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>XML Validator - Validate XML Online</title>
    <meta name="description" content="Validate XML structure online and quickly identify XML syntax errors.">

    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="XML Validator - Validate XML Online">
<meta property="og:description" content="Validate XML structure online and quickly identify XML syntax errors.">
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
<a href="/xml-validator">Xml Validator</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">

<section class="tool-page">

<div class="container">

    <h1>XML Validator</h1>

    <p class="tool-description">
        Validate XML and detect syntax errors directly in your browser.
    </p>

    <div class="tool-wrapper">

        <div class="tool-card-panel">

            <div class="tool-card-panel-header">
                <strong>Input XML</strong>
            </div>

            <textarea
                class="tool-textarea" id="xmlInput"
                placeholder='<users><user>Silva</user></users>'
            ></textarea>

        </div>

        <div class="tool-actions">

            <button id="validateButton" class="tool-btn tool-btn-primary">
                Validate XML
            </button>

            <button id="clearButton" class="tool-btn tool-btn-secondary">
                Clear
            </button>

        </div>

        <div id="resultMessage"></div>

    </div>

</div>

</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"><a href="/xml-formatter" class="nav-link">← XML Formatter</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/html-formatter" class="nav-link">HTML Formatter →</a></div></nav>


<footer class="footer">
    <div class="container">
        <p>&copy; 2026 DevTools. All rights reserved.</p>
    </div>
</footer>

<script src="/public/assets/js/xml-validator.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>