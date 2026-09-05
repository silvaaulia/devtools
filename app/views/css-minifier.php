<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CSS Minifier - Minify CSS Online</title>
    <meta name="description" content="Minify CSS online and reduce unnecessary whitespace for smaller CSS code.">

    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="CSS Minifier - Minify CSS Online">
<meta property="og:description" content="Minify CSS online and reduce unnecessary whitespace for smaller CSS code.">
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
<a href="/css-minifier">Css Minifier</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">
<section class="tool-page">

<div class="container">

    <h1>CSS Minifier</h1>

    <p class="tool-description">
        Minify CSS by removing unnecessary spaces, comments and line breaks.
    </p>

    <div class="tool-wrapper">

        <div class="tool-card-panel">

            <div class="tool-card-panel-header">
                <strong>Input CSS</strong>
            </div>

            <textarea
                class="tool-textarea" id="cssInput"
                placeholder="body { margin: 0; padding: 0; }"
            ></textarea>

        </div>

        <div class="tool-actions">

            <button id="minifyButton" class="tool-btn tool-btn-primary">
                Minify CSS
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
                placeholder="Minified CSS will appear here..."
            ></textarea>

        </div>

    </div>

</div>

</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"><a href="/css-formatter" class="nav-link">← CSS Formatter</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/javascript-minifier" class="nav-link">JavaScript Minifier →</a></div></nav>


<footer class="footer">
    <div class="container">
        <p>&copy; 2026 DevTools. All rights reserved.</p>
    </div>
</footer>

<script src="/public/assets/js/css-minifier.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>