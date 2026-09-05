<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>XML Formatter - Beautify XML Online</title>
    <meta name="description" content="Format and beautify XML documents online with this fast and free XML formatter.">

    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="XML Formatter - Beautify XML Online">
<meta property="og:description" content="Format and beautify XML documents online with this fast and free XML formatter.">
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
<a href="/xml-formatter">Xml Formatter</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">
<section class="tool-page">

<div class="container">

    <h1>XML Formatter</h1>

    <p class="tool-description">
        Format and beautify XML directly in your browser.
    </p>

    <div class="tool-wrapper">

        <div class="tool-card-panel">

            <div class="tool-card-panel-header">
                <strong>Input XML</strong>
            </div>

            <textarea
                class="tool-textarea" id="xmlInput"
                placeholder='<users><user><name>Silva</name></user></users>'
            ></textarea>

        </div>

        <div class="tool-actions">

            <button id="formatButton" class="tool-btn tool-btn-primary">
                Format XML
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
                class="tool-textarea" id="xmlOutput"
                readonly
                placeholder="Formatted XML will appear here..."
            ></textarea>

        </div>

    </div>

    <section class="tool-help">

        <h2>What is XML Formatter?</h2>

        <p>
            XML Formatter makes XML documents easier to read by
            adding indentation and proper line breaks.
        </p>

        <h2>Features</h2>

        <ul>
            <li>Format XML</li>
            <li>Minify XML</li>
            <li>Validate XML structure</li>
            <li>Copy formatted XML</li>
            <li>Runs directly in your browser</li>
        </ul>

    </section>

</div>

</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"><a href="/json-minifier" class="nav-link">← JSON Minifier</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/xml-validator" class="nav-link">XML Validator →</a></div></nav>


<footer class="footer">
    <div class="container">
        <p>&copy; 2026 DevTools. All rights reserved.</p>
    </div>
</footer>

<script src="/public/assets/js/xml-formatter.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>