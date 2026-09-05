<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>JavaScript Minifier - Minify JS Online</title>

    <meta
        name="description"
        content="Free online JavaScript Minifier. Reduce JavaScript file size directly in your browser."
    >

    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="JavaScript Minifier - Minify JS Online">
<meta property="og:description" content="Free online JavaScript Minifier. Reduce JavaScript file size directly in your browser.">
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
<a href="/javascript-minifier">Javascript Minifier</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">

<section class="tool-page">

<div class="container">

    <h1>JavaScript Minifier</h1>

    <p class="tool-description">
        Minify JavaScript by removing unnecessary whitespace and comments.
    </p>

    <div class="tool-wrapper">

        <div class="tool-card-panel">

            <div class="tool-card-panel-header">
                <strong>Input JavaScript</strong>
            </div>

            <textarea
                class="tool-textarea" id="jsInput"
                placeholder="function hello() {
    console.log('Hello World');
}"
            ></textarea>

        </div>

        <div class="tool-actions">

            <button id="minifyButton" class="tool-btn tool-btn-primary">
                Minify JavaScript
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
                class="tool-textarea" id="jsOutput"
                readonly
                placeholder="Minified JavaScript will appear here..."
            ></textarea>

        </div>

    </div>

    <section class="tool-help">

        <h2>What is JavaScript Minifier?</h2>

        <p>
            JavaScript Minifier removes unnecessary whitespace and
            comments to reduce JavaScript source size.
        </p>

        <h2>Important</h2>

        <p>
            This tool performs lightweight client-side minification.
            For complex production JavaScript, a dedicated build tool
            is recommended.
        </p>

    </section>

</div>

</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"><a href="/css-minifier" class="nav-link">← CSS Minifier</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/sql-formatter" class="nav-link">SQL Formatter →</a></div></nav>


<footer class="footer">

    <div class="container">
        <p>&copy; 2026 DevTools. All rights reserved.</p>
    </div>

</footer>

<script src="/public/assets/js/javascript-minifier.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>