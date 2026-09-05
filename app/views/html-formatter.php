<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>HTML Formatter - Beautify HTML Online</title>
    <meta name="description" content="Format and beautify HTML code online with a simple browser-based HTML formatter.">

    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="HTML Formatter - Beautify HTML Online">
<meta property="og:description" content="Format and beautify HTML code online with a simple browser-based HTML formatter.">
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
<a href="/html-formatter">Html Formatter</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">

<section class="tool-page">

<div class="container">

    <h1>HTML Formatter</h1>

    <p class="tool-description">
        Format and beautify HTML code directly in your browser.
    </p>

    <div class="tool-wrapper">

        <div class="tool-card-panel">

            <div class="tool-card-panel-header">
                <strong>Input HTML</strong>
            </div>

            <textarea
                class="tool-textarea" id="htmlInput"
                placeholder='<div><h1>Hello World</h1><p>Welcome to DevTools</p></div>'
            ></textarea>

        </div>

        <div class="tool-actions">

            <button id="formatButton" class="tool-btn tool-btn-primary">
                Format HTML
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
                class="tool-textarea" id="htmlOutput"
                readonly
                placeholder="Formatted HTML will appear here..."
            ></textarea>

        </div>

    </div>

    <section class="tool-help">

        <h2>What is HTML Formatter?</h2>

        <p>
            HTML Formatter organizes HTML code with indentation and
            line breaks, making source code easier to read and maintain.
        </p>

        <h2>Features</h2>

        <ul>
            <li>Format HTML</li>
            <li>Minify HTML</li>
            <li>Copy formatted HTML</li>
            <li>Runs directly in your browser</li>
        </ul>

    </section>

</div>

</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"><a href="/xml-validator" class="nav-link">← XML Validator</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/css-formatter" class="nav-link">CSS Formatter →</a></div></nav>


<footer class="footer">
    <div class="container">
        <p>&copy; 2026 DevTools. All rights reserved.</p>
    </div>
</footer>

<script src="/public/assets/js/html-formatter.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>