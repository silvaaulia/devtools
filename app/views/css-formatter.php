<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Formatter - Beautify CSS Online</title>
    <meta name="description" content="Format and beautify CSS code online with this free and easy-to-use CSS formatter.">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="CSS Formatter - Beautify CSS Online">
<meta property="og:description" content="Format and beautify CSS code online with this free and easy-to-use CSS formatter.">
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
<a href="/css-formatter">Css Formatter</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">
<section class="tool-page">
<div class="container">

    <h1>CSS Formatter</h1>

    <p class="tool-description">
        Format and beautify CSS code directly in your browser.
    </p>

    <div class="tool-wrapper">

        <div class="tool-card-panel">
            <div class="tool-card-panel-header">
                <strong>Input CSS</strong>
            </div>

            <textarea
                class="tool-textarea" id="cssInput"
                placeholder="body{margin:0;padding:0;color:#333}.container{max-width:1200px;margin:auto}"
            ></textarea>
        </div>

        <div class="tool-actions">
            <button id="formatButton" class="tool-btn tool-btn-primary">
                Format CSS
            </button>

            <button id="minifyButton" class="tool-btn tool-btn-secondary">
                Minify
            </button>

            <button id="clearButton" class="tool-btn tool-btn-secondary">
                Clear
            </button>
        </div>

        <div id="errorMessage" class="tool-error"></div>

        <div class="tool-card-panel">
            <div class="tool-card-panel-header">
                <strong>Result</strong>

                <button id="copyButton" class="tool-btn tool-btn-small">
                    Copy
                </button>
            </div>

            <textarea
                class="tool-textarea" id="cssOutput"
                readonly
                placeholder="Formatted CSS will appear here..."
            ></textarea>
        </div>

    </div>

    <section class="tool-help">

        <h2>What is CSS Formatter?</h2>

        <p>
            CSS Formatter organizes CSS code with indentation and line
            breaks so it is easier to read and maintain.
        </p>

        <h2>Features</h2>

        <ul>
            <li>Beautify CSS</li>
            <li>Minify CSS</li>
            <li>Copy result</li>
            <li>Browser-based processing</li>
        </ul>

    </section>

</div>
</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"><a href="/html-formatter" class="nav-link">← HTML Formatter</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/css-minifier" class="nav-link">CSS Minifier →</a></div></nav>


<footer class="footer">
    <div class="container">
        <p>&copy; 2026 DevTools. All rights reserved.</p>
    </div>
</footer>

<script src="/public/assets/js/css-formatter.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>